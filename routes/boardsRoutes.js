const router = require("express").Router();
const boardsController = require("../controllers/boardsController");

router
  .route("/")
  .get(boardsController.allBoards)
  .post(boardsController.addBoard);

router
  .route("/:id")
  .get(boardsController.singleBoard)
  .delete(boardsController.deleteBoard);

router.route("/:id/palette").get(boardsController.boardPalette);

module.exports = router;
