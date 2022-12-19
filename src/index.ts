import express from "express";
import * as dotenv from "dotenv";
import * as redis from 'redis';
import counterRoute from "./routes/counterRoute";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../config/.env") });

const counter = express();

counter.use(express.urlencoded());
counter.use(express.json());
counter.use("/counter", counterRoute);

const PORT = process.env.PORT || 3000;
const REDIS_URL = process.env.REDIS_URL || "localhost";

export const client = redis.createClient({ url: REDIS_URL });

(async () => {
  await client.connect();
})();

counter.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
