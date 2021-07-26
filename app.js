const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "",
  database: "nodejs-login",
});

db.connect((err) => {
  if (err) console.log(err);
  else console.log("MySQL connected");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hihi");
});

app.listen(process.env.PORT, () =>
  console.log(`app is running on ${process.env.PORT}`)
);
