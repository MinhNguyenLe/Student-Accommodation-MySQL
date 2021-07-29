const router = require("express").Router();
const userController = require("../controller/userController");

router.post("/login", userController.login);
router.get("/:email", userController.getByEmail);
router.post("/change-info", userController.changeInfo);

// router.post("/logout", userController.logout);
// router.post("/register", userController.register);

module.exports = router;
