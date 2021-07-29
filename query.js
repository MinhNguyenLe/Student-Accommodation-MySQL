const query = {
  CHECK_EMAIL: "SELECT * from users where email = ?",
  SELECT_USER_AND_REVIEW:
    "SELECT * FROM `reviews` JOIN `users` on reviews.id_user = users.id_user",
  CHANGE_INFO:
    "update users set name = ? , age = ? , phone = ? , job = ? where id_user = ?",
};

module.exports = query;
