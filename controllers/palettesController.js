const knex = require("knex")(require("../knexfile").development);
const axios = require("axios");

// exports.getPalette = (_req, res) => {
//   knex("palette")
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => {
//       res.status(400).send(`Error retrieving Palettes: ${err}`);
//     });
// };

exports.generatePalette = (req, res) => {
  //go to colors_keywords database
  //match keyword to color
  //bring back base color
  let baseColor = req.body;
  //send base color to external api to bring back color palette
  axios
    .get(`https://www.thecolorapi.com/scheme?hex=${baseColor}&count=5`)
    .then((response) => {
      let colorPalette = response.data.colors.map((color) => color.hex.value);

      // return colorPalette;
      res.json(colorPalette);
    })
    // .then((colorPalette) => {
    //   knex("palette")
    //     .insert(colorPalette)
    //     .then((data) => {
    //       res.send(data);
    //     });
    // })
    .catch((err) => {
      res.status(400).send(`Error retrieving color palette: ${err}`);
    });
};
