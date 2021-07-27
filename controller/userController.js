const db = require("../connectDB.js");
const query = require("../query.js");

db.connect((err) => {
  if (err) console.log(err);
  else console.log(`DB ${process.env.DATABASE} connected`);
});

const userController = {
  login: (req, res) => {
    db.query(
      query.check_email,
      [req.params.email],
      (error, results, fields) => {
        if (error) console.log(error);
        if (!results.length)
          return res.status(400).json({ msg: "Incorrect password" });
        return res.status(200).json({ msg: "success login", data: results });
      }
    );
  },
};

module.exports = userController;
