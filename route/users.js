const router = require("express").Router();
const userController = require("../controller/UserController");

router.get("/login/:email", userController.login);
// router.post("/logout", userController.logout);
// router.post("/register", userController.register);

module.exports = router;
