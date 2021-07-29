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
  getByEmail: (req, res) => {
    db.query(
      query.CHECK_EMAIL,
      [req.params.email],
      (error, results, fields) => {
        if (error) console.log(error);
        if (!results) return res.status(400).json({ msg: "Incorrect email" });
        return res
          .status(200)
          .json({ msg: "success get user by email", user: results[0] });
      }
    );
  },
  changeInfo: (req, res) => {
    db.query(
      query.CHANGE_INFO,
      [req.body.name, req.body.age, req.body.phone, req.body.job, req.body.id],
      (error, results, fields) => {
        if (error) return res.status(500).json({ msg: "loi roi thang ngu" });
        if (!results) return res.status(400).json({ msg: "Incorrect email" });
        return res
          .status(200)
          .json({ msg: "success get user by email", changeUser: results[0] });
      }
    );
  },
};
module.exports = userController;
