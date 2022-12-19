import express from "express";
import redis from "redis";
import counterRoute from "./routes/counterRoute";

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use("/counter", counterRoute);

const PORT = process.env.PORT || 3100;
const REDIS_URL = process.env.REDIS_URL || "localhost";

export const client = redis.createClient({ url: REDIS_URL });

(async () => {
  await client.connect();
})();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
