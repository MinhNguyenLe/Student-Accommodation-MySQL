const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

//connect route
const route = require("./route");
route(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.json({ dm: "hihihi" });
});

app.listen(process.env.PORT, () =>
  console.log(`app is running on ${process.env.PORT}`)
);
