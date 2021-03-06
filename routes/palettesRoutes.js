const router = require("express").Router();
const palettesController = require("../controllers/palettesController");

router.route("/:keyword").get(palettesController.generatePalette);

router.route("/").post(palettesController.addPalette);

module.exports = router;
