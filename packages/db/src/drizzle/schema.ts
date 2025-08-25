import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const post = pgTable("post", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
});

export const blog = pgTable("blog", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});
