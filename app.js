const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

//connect route
const route = require("./route");
app.use(cors());
app.use(express.json());
route(app);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  console.log(req.body);
  res.json({ dm: "hihihi" });
});

app.listen(process.env.PORT, () =>
  console.log(`app is running on ${process.env.PORT}`)
);
