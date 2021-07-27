const router = require("express").Router();
const userController = require("../controller/UserController");

router.post("/login/:email", userController.login);

module.exports = router;
