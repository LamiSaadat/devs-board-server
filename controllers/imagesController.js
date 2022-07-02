const knex = require("knex")(require("../knexfile").development);
const axios = require("axios");
const fs = require("fs");
const keywordsFilePath = "./data/keywords.json";

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

// const getKeywordData = () => {
//   return JSON.parse(fs.readFileSync(keywordsFilePath));
// };

// exports.generateImages = (req, res) => {
//  //get keyword from front end
//  let requestedKeyword = req.params.keyword;
//  console.log(requestedKeyword);
//  //go to colors_keywords database
//  let lookupFile = getKeywordData();
//  //match keyword
//  const foundK = lookupFile.find((listItem) => {
//    if (listItem.keyword === requestedKeyword) {
//      console.log(listItem.colorHex);
//      return listItem.colorHex;
//    }
//  });
//  console.log(foundBaseColor.colorHex);

//  axios
//    .get(
//      `https://www.thecolorapi.com/scheme?hex=${foundBaseColor.colorHex}&count=5`
//    )
//    .then((response) => {
//      let colorPalette = response.data.colors.map((color) => {
//        return {
//          color: color.hex,
//        };
//      });

//      res.json(colorPalette);
//    })
//    .catch((err) => {
//      res.status(400).send(`Error retrieving color palette: ${err}`);
//    });
// };
