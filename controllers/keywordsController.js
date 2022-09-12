const fs = require("fs");
const keywordsFilePath = "./data/keywords.json";

//Read the json file for keywords
exports.getKeywords = () => {
  return JSON.parse(fs.readFileSync(keywordsFilePath));
};
