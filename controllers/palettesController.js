const knex = require("knex")(require("../knexfile").development);
const axios = require("axios");
const fs = require("fs");
const basecolorsKeywordFilePath = "./data/basecolors_keywords.json";

// exports.getPalette = (_req, res) => {
//   knex("palette")
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => {
//       res.status(400).send(`Error retrieving Palettes: ${err}`);
//     });
// };
const getColorKeywordData = () => {
  return JSON.parse(fs.readFileSync(basecolorsKeywordFilePath));
};

exports.generatePalette = (req, res) => {
  //get keyword from front end
  let requestedKeyword = req.params.keyword;
  console.log(requestedKeyword);
  //go to colors_keywords database
  let lookupFile = getColorKeywordData();
  //match keyword to color
  const foundBaseColor = lookupFile.find((listItem) => {
    if (listItem.keyword === requestedKeyword) {
      console.log(listItem.colorHex);
      return listItem.colorHex;
    }
  });
  console.log(foundBaseColor.colorHex);

  axios
    .get(
      `https://www.thecolorapi.com/scheme?hex=${foundBaseColor.colorHex}&count=5`
    )
    .then((response) => {
      let colorPalette = response.data.colors.map((color) => {
        return {
          color: color.hex,
        };
      });

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

exports.addPalette = (req, res) => {
  knex("palette")
    .insert(req.bod)
    .then((data) => {
      const newPaletteURL = `palettes/${data[0]}`;
      res.status(200).location(newPaletteURL).send(newPaletteURL);
    })
    .catch((err) => {
      res.status(400).send(`Error creating Palettes: ${err}`);
    });
};
