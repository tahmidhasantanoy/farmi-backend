import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT || 8000,
  node_dev: process.env.NODE_ENV || "development",
  db_url: process.env.DB_URL,
};
