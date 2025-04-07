import { drizzle } from "drizzle-orm/node-postgres";
import { config } from "dotenv";
config({ path: ".env.local" });

const db = drizzle(process.env.AUTH_DRIZZLE_URL!);
