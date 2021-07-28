const router = require("express").Router();
const reviewController = require("../controller/reviewController");

router.get("/login", reviewController.login);
// router.post("/logout", userController.logout);
// router.post("/register", userController.register);

module.exports = router;
