// import { Pool } from "postgres-pool";
import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
  host: "localhost",
  database: "todo",
  user: "postgres",
  password: "postgres",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
