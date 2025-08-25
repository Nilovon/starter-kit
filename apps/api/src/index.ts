import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { health } from "./routes/health";

const app = new Elysia()
  .use(
    cors({
      credentials: true,
      origin: [
        /(?:^|\.)databuddy\.cc$/,
        ...(process.env.NODE_ENV === "development"
          ? ["http://localhost:3000"]
          : []),
      ],
    })
  )
  .use(health);

export default {
  fetch: app.fetch,
  port: 3001,
};
