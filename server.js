import express from "express";
import config from "./config/index.js";
import router from "./routes/index.js";
import connection from "./db/index.js";

const app = express();

app.use(express.json());

app.use("/api", router);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ name: err.name, message: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});

export { connection as db };
