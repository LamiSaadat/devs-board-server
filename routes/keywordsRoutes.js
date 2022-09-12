const router = require("express").Router();
const keywordsController = require("../controllers/keywordsController");

router.route("/").get(keywordsController.getKeywords);

module.exports = router;
