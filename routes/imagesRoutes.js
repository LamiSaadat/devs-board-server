const router = require("express").Router();
const imagesController = require("../controllers/imagesController");

router.route("/").get(imagesController.index);

module.exports = router;
