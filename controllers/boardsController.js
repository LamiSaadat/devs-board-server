const knex = require("knex")(require("../knexfile"));

//get all boards
exports.allBoards = (_req, res) => {
  knex("board")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving Boards: ${err}`);
    });
};

//get a single board
exports.singleBoard = (req, res) => {
  knex("board")
    .where({ id: req.params.id })
    .then((data) => {
      //If record not found, respond with 404
      if (!data.length) {
        return res.status(404).send("Board not found.");
      }
      res.status(200).json(data[0]);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving board: ${err}`);
    });
};

exports.addBoard = (req, res) => {
  knex("board")
    .insert(req.body)
    .then((data) => {
      res.status(201).json({ id: data[0] });
    })
    .catch((err) => {
      res.status(400).send(`Error creating Boards: ${err}`);
    });
};

exports.deleteBoard = (req, res) => {
  knex("board")
    .delete()
    .where({ id: req.params.id })
    .then(() => {
      res.status(204).send(`Board with id:${req.params.id} has been deleted.`);
    })
    .catch((err) => {
      res
        .status(400)
        .send(`Error deleting board with id:${req.params.id}: ${err}`);
    });
};

exports.boardPalette = (req, res) => {
  knex("palette")
    .where({ board_id: req.params.id })
    .then((data) => {
      console.log("board palette:", data);
      res.status(200).json(data);
    });
};

exports.boardImages = (req, res) => {
  knex("images")
    .where({ board_id: req.params.id })
    .then((data) => {
      console.log("board images:", data);
      res.status(200).json(data);
    });
};
