const router = require("express").Router();
const palettesController = require("../controllers/palettesController");

router.route("/").get(palettesController.index);

module.exports = router;
