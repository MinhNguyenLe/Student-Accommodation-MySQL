const db = require("../connectDB.js");
const query = require("../query.js");

const reviewController = {
  getAll: (req, res) => {
    db.query(query.SELECT_USER_AND_REVIEW, (error, results, fields) => {
      if (error) console.log(error);
      if (!results) return res.status(400).json({ msg: "Incorrect password" });
      return res.status(200).json({ msg: "success login", data: results });
    });
  },
};

module.exports = reviewController;
