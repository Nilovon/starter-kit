import { db } from "@nilovon-starterkit/db";
import { redis as redisClient } from "@nilovon-starterkit/redis";
import { Elysia } from "elysia";

const checkDatabase = async () => {
  try {
    const result = await db.query.blog.findMany({
      limit: 1,
    });
    return result.length > 0;
  } catch {
    return false;
  }
};

const checkRedis = async () => {
  try {
    const result = await redisClient.ping();
    return result === "PONG";
  } catch {
    return false;
  }
};

export const health = new Elysia().get("/health", async () => {
  const [database, redis] = await Promise.all([checkDatabase(), checkRedis()]);

  const success = database && redis;

  return new Response(
    JSON.stringify({
      database,
      redis,
      success,
      version: "1.0.0",
      timestamp: new Date().toISOString(),
    }),
    {
      // biome-ignore lint/style/noMagicNumbers: <explanation>
      status: success ? 200 : 503,
      headers: { "Content-Type": "application/json" },
    }
  );
});
