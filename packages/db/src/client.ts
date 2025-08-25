import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
// biome-ignore lint/performance/noNamespaceImport: <explanation>
import * as main from "./drizzle/schema";
// biome-ignore lint/performance/noNamespaceImport: <explanation>
import * as auth from "./drizzle/auth";

// Combine schema and relations
const fullSchema = { ...main, ...auth };

const databaseUrl = process.env.DATABASE_URL as string;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set");
}

const pool = new Pool({ connectionString: databaseUrl });

export const db = drizzle(pool, { schema: fullSchema });
