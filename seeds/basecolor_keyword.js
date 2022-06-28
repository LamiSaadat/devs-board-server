/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const basecolorData = require("../seed_data/basecolors");
const keywordData = require("../seed_data/keywords");
const basecolorKeywordData = require("../seed_data/basecolor_keyword_seed");

exports.seed = function (knex) {
  return knex("keywords")
    .del()
    .then(() => {
      return knex("keywords").insert(keywordData);
    })

    .then(() => {
      return knex("basecolor_keyword").del();
    })
    .then(() => {
      return knex("basecolor_keyword").insert(basecolorKeywordData);
    })
    .then(() => {
      return knex("basecolors").del();
    })
    .then(() => {
      return knex("basecolors").insert(basecolorData);
    });
};
