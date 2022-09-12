const knex = require("knex")(require("../knexfile"));
const axios = require("axios");
const fs = require("fs");
const basecolorsKeywordFilePath = "./data/basecolors_keywords.json";

const getColorKeywordData = () => {
  return JSON.parse(fs.readFileSync(basecolorsKeywordFilePath));
};

//generate a palette
exports.generatePalette = (req, res) => {
  //get keyword from front end
  let requestedKeyword = req.params.keyword;
  //go to colors_keywords database
  let lookupFile = getColorKeywordData();
  //match keyword to color
  const foundBaseColor = lookupFile.find((listItem) => {
    if (listItem.keyword === requestedKeyword) return listItem.colorHex;
  });

  axios
    .get(
      `https://www.thecolorapi.com/scheme?hex=${foundBaseColor.colorHex}&count=5&mode=analogic`
    )
    .then((response) => {
      let colorPalette = response.data.colors.map((color) => {
        return {
          color: color.hex,
        };
      });

      res.json(colorPalette);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving color palette: ${err}`);
    });
};

//create a palette
exports.addPalette = (req, res) => {
  knex("palette")
    .insert(req.body)
    .then((data) => {
      res.status(201).json({ id: data[0] });
    })
    .catch((err) => {
      res.status(400).send(`Error creating Palettes: ${err}`);
    });
};
