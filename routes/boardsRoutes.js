const router = require("express").Router();
const boardsController = require("../controllers/boardsController");
const authController = require("../controllers/authController");

router
  .route("/")
  // .get(authController.authorize, boardsController.allBoards)
  .get(authController.authorize, boardsController.allBoards)
  .post(boardsController.addBoard);

router
  .route("/:id")
  .get(boardsController.singleBoard)
  .delete(boardsController.deleteBoard);

router.route("/:id/palette").get(boardsController.boardPalette);
router.route("/:id/images").get(boardsController.boardImages);

module.exports = router;
