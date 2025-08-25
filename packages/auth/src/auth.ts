import { db, eq, user } from "@nilovon-starterkit/db";
import {
  InvitationEmail,
  MagicLinkEmail,
  OtpEmail,
  ResetPasswordEmail,
  VerificationEmail,
  WelcomeEmail,
} from "@nilovon-starterkit/email";
import { getRedisCache } from "@nilovon-starterkit/redis";
import { logger } from "@nilovon-starterkit/shared";
import { betterAuth } from "better-auth";

import { drizzleAdapter } from "better-auth/adapters/drizzle";
import {
  customSession,
  emailOTP,
  magicLink,
  organization,
  twoFactor,
} from "better-auth/plugins";
import { Resend } from "resend";
import { ac, admin, member, owner, viewer } from "./permissions";

function isProduction() {
  return process.env.NODE_ENV === "production";
}

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  databaseHooks: {
    user: {
      create: {
        after: async ({ email, name }) => {
          logger.info(
            "User Created",
            `User ${user.id}, ${user.name}, ${user.email} created`
          );

          const resend = new Resend(process.env.RESEND_API_KEY as string);
          await resend.emails.send({
            from: "Databuddy <noreply@databuddy.cc>",
            to: email,
            subject: "Welcome to Databuddy",
            react: WelcomeEmail({
              username: name,
              url: process.env.BETTER_AUTH_URL as string,
            }),
          });
        },
      },
    },
  },
  user: {
    deleteUser: {
      enabled: true,
      beforeDelete: ({ id }) => {
        logger.info(
          "User Deletion Started",
          `Starting deletion process for user ${id}`
        );

        return Promise.resolve();
      },
    },
  },
  appName: "databuddy.cc",
  onAPIError: {
    throw: false,
    onError: (error, ctx) => {
      if (error instanceof Error) {
        logger.exception(error, ctx as Record<string, unknown>);
      } else {
        logger.error("Auth API Error", "An unknown error occurred", {
          error,
          ...(ctx as Record<string, unknown>),
        });
      }
    },
    errorURL: "/auth/error",
  },
  advanced: {
    crossSubDomainCookies: {
      enabled: isProduction(),
      domain: ".databuddy.cc",
    },
    cookiePrefix: "databuddy",
    useSecureCookies: isProduction(),
  },
  trustedOrigins: [
    "https://databuddy.cc",
    "https://app.databuddy.cc",
    "https://api.databuddy.cc",
  ],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    maxPasswordLength: 32,
    autoSignIn: false,
    requireEmailVerification: true,
    sendResetPassword: async ({ user: { email }, url }) => {
      const resend = new Resend(process.env.RESEND_API_KEY as string);
      await resend.emails.send({
        from: "noreply@databuddy.cc",
        to: email,
        subject: "Reset your password",
        react: ResetPasswordEmail({ url }),
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationOnSignUp: true,
    disableSignUp: true,
    sendVerificationOnSignIn: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user: { email }, url }) => {
      logger.info(
        "Email Verification",
        `Sending verification email to ${user.email}`
      );
      const resend = new Resend(process.env.RESEND_API_KEY as string);
      await resend.emails.send({
        from: "noreply@databuddy.cc",
        to: email,
        subject: "Verify your email",
        react: VerificationEmail({ url }),
      });
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 24 * 30, // 30 days
    },
    expiresIn: 60 * 60 * 24 * 30, // 30 days
    updateAge: 60 * 60 * 24 * 3, // 1 day (every 1 day the session expiration is updated)
    storeSessionInDatabase: true, // Store session in database when secondary storage is provided
    preserveSessionInDatabase: true, // Preserve session records in database when deleted from secondary storage
  },
  secondaryStorage: {
    get: async (key) => {
      const value = await getRedisCache()?.get(key);
      return value ? value : null;
    },
    set: async (key, value, ttl = 60 * 60 * 24) => {
      await getRedisCache()?.setex(key, ttl, value);
    },
    delete: async (key) => {
      await getRedisCache()?.del(key);
    },
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        logger.info("Email OTP", `Sending OTP to ${email} of type ${type}`);
        const resend = new Resend(process.env.RESEND_API_KEY as string);
        await resend.emails.send({
          from: "noreply@databuddy.cc",
          to: email,
          subject: "Your verification code",
          react: OtpEmail({ otp }),
        });
      },
    }),
    magicLink({
      sendMagicLink: async ({ email, url }) => {
        logger.info("Magic Link", `Sending magic link to ${email}`);
        const resend = new Resend(process.env.RESEND_API_KEY as string);
        await resend.emails.send({
          from: "noreply@databuddy.cc",
          to: email,
          subject: "Login to Databuddy",
          react: MagicLinkEmail({ url }),
        });
      },
    }),
    twoFactor(),
    customSession(async ({ user: sessionUser, session }) => {
      const [dbUser] = await db.query.user.findMany({
        where: eq(user.id, session.userId),
        columns: {
          role: true,
        },
      });
      return {
        role: dbUser?.role,
        user: {
          ...sessionUser,
          role: dbUser?.role,
        },
        session,
      };
    }),
    organization({
      creatorRole: "owner",
      teams: {
        enabled: false,
      },
      ac,
      roles: {
        owner,
        admin,
        member,
        viewer,
      },
      sendInvitationEmail: async ({
        email,
        inviter,
        organization: { id, name },
        invitation,
      }) => {
        logger.info("Organization Invitation", `Inviting ${email} to ${name}`, {
          inviter: inviter.user.name,
          organizationId: id,
        });
        const invitationLink = `https://app.databuddy.cc/invitations/${invitation.id}`;
        const resend = new Resend(process.env.RESEND_API_KEY as string);
        await resend.emails.send({
          from: "noreply@databuddy.cc",
          to: email,
          subject: `You're invited to join ${name}`,
          react: InvitationEmail({
            inviterName: inviter.user.name,
            organizationName: name,
            invitationLink,
          }),
        });
      },
    }),
  ],
});

export const websitesApi = {
  hasPermission: auth.api.hasPermission,
};

export type User = (typeof auth)["$Infer"]["Session"]["user"] & {
  role?: "OWNER" | "ADMIN" | "MEMBER" | "VIEWER";
};
export type Session = (typeof auth)["$Infer"]["Session"];
