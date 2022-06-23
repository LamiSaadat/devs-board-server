const router = require("express").Router();
const boardsController = require("../controllers/boardsController");

router.route("/").get(boardsController.index);

router.route("/:id").get(boardsController.singleBoard);

module.exports = router;
