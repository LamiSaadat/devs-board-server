const knex = require("knex")(require("../knexfile").development);

//get all boards
exports.index = (_req, res) => {
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
