import express from "express";
import mysql from "mysql";
import config from "./config/index.js";
import router from "./routes/index.js";

const app = express();

const db = mysql.createConnection(config.mysql);

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    process.exit(1);
  }
  console.log("Connected to MySQL");
});

app.use(express.json());

app.use("/api", router);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ name: err.name, message: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});

export { db };
