const db = require("../connectDB.js");
const query = require("../query.js");

const userController = {
  login: (req, res) => {
    db.query(query.CHECK_EMAIL, [req.body.email], (error, results, fields) => {
      if (error) console.log(error);
      if (!results) return res.status(400).json({ msg: "Incorrect password" });
      return res.status(200).json({ msg: "success login", data: results });
    });
  },
  getByEmail: () => {},
};
module.exports = userController;
