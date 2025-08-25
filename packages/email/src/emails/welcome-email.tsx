import { Button, Heading, Section, Text } from "@react-email/components";
import { EmailLayout } from "./email-layout";

interface WelcomeEmailProps {
  username: string;
  organizationName?: string;
  url: string;
}

export const WelcomeEmail = ({
  username,
  organizationName,
  url,
}: WelcomeEmailProps) => {
  return (
    <EmailLayout
      preview={`Welcome to ${organizationName || "Nilovon Starterkit"}!`}
    >
      <Section className="my-6">
        <Heading className="text-center font-semibold text-2xl">
          Welcome to {organizationName || "Nilovon Starterkit"}!
        </Heading>
        <Text className="text-center">
          Hi <strong>{username}</strong>, we're excited to have you on board!
        </Text>
        <Text className="text-center">
          You're now part of a powerful platform that helps teams collaborate
          and build amazing things together.
        </Text>
      </Section>
      <Section className="text-center">
        <Button
          className="rounded bg-brand px-5 py-3 text-center font-medium text-sm text-white"
          href={url}
        >
          Get Started
        </Button>
      </Section>
      <Section className="my-6">
        <Text className="text-center">
          Here's what you can do to get started:
        </Text>
        <Text className="mt-4 text-center">
          • Explore your dashboard and familiarize yourself with the interface
        </Text>
        <Text className="text-center">
          • Set up your profile and preferences
        </Text>
        <Text className="text-center">
          • Invite team members to collaborate
        </Text>
        <Text className="text-center">
          • Check out our documentation and tutorials
        </Text>
        <Text className="mt-4 text-center text-muted-foreground">
          If you have any questions or need help getting started, don't hesitate
          to reach out to our support team.
        </Text>
        <Text className="mt-4 text-center text-muted-foreground">
          If you're having trouble with the button above, copy and paste the URL
          below into your web browser.
        </Text>
        <Text className="mt-2 max-w-full overflow-x-auto text-center text-muted-foreground text-sm">
          {url}
        </Text>
      </Section>
    </EmailLayout>
  );
};

export default WelcomeEmail;
