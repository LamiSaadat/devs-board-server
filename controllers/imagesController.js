const knex = require("knex")(require("../knexfile").development);

exports.addImages = (req, res) => {
  knex("images")
    .insert(req.body)
    .then((data) => {
      res.status(201).json({ id: data[0] });
    })
    .catch((err) => {
      res.status(400).send(`Error creating Images: ${err}`);
    });
};
