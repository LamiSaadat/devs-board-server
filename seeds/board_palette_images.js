/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const boardData = require("../seed_data/board");
const paletteData = require("../seed_data/palette");
const imagesData = require("../seed_data/images");
const userData = require("../seed_data/user");

exports.seed = function (knex) {
  return knex("user")
    .del()
    .then(() => {
      return knex("user").insert(userData);
    })
    .then(() => {
      return knex("board").del();
    })
    .then(() => {
      return knex("board").insert(boardData);
    })
    .then(() => {
      return knex("palette").del();
    })
    .then(() => {
      return knex("palette").insert(paletteData);
    })
    .then(() => {
      return knex("images").del();
    })
    .then(() => {
      return knex("images").insert(imagesData);
    });
};
