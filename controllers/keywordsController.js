const fs = require("fs");
const basecolorsKeywordFilePath = "./data/basecolors_keywords.json";

//Read the json file for keywords
const getColorKeywordData = () => {
  return JSON.parse(fs.readFileSync(basecolorsKeywordFilePath));
};

exports.getKeywords = (req, res) => {
  let lookUpFile = getColorKeywordData();
  const keywordArr = lookUpFile.map((obj) => obj.keyword);
  res.status(200).json(keywordArr);
};
