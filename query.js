const query = {
  CHECK_EMAIL: "SELECT * from users where email = ?",
  SELECT_USER_AND_REVIEW:
    "SELECT * FROM `reviews` JOIN `users` on reviews.id_user = users.id_user",
};

module.exports = query;
