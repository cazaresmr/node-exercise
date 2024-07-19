import mysql from "mysql";
import config from "../config/index.js";

console.log("MySQL Config:", config.mysql);

const connection = mysql.createPool(config.mysql);

export default connection;
