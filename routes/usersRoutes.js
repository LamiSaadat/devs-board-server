const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.route("/signup").post(usersController.signup);
// router.route("/login").get(usersController.login);

module.exports = router;
