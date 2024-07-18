import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 5002,
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  },
};

export default config;
