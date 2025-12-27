require('dotenv').config({ path: '.env' });
const { defineConfig } = require("drizzle-kit");

module.exports = defineConfig({
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
