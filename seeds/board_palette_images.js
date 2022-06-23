/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const boardData = require("../seed_data/board");

exports.seed = function (knex) {
  return knex("board")
    .del()
    .then(function () {
      return knex("board").insert(boardData);
    });
};
