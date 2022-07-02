const router = require("express").Router();
const imagesController = require("../controllers/imagesController");

router.route("/").post(imagesController.addImages);

module.exports = router;
