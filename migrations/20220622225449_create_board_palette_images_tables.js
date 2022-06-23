/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("board", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
    })
    .createTable("palette", (table) => {
      table.increments("id").primary();
      table.string("color1").notNullable();
      table.string("color2").notNullable();
      table.string("color3").notNullable();
      table.string("color4").notNullable();
      table.string("color5").notNullable();
      table
        .integer("board_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("board")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("images", (table) => {
      table.increments("id").primary();
      table.string("image1").notNullable();
      table.string("image2").notNullable();
      table.string("image3").notNullable();
      table.string("image4").notNullable();
      table.string("image5").notNullable();
      table.string("image6").notNullable();
      table.string("image7").notNullable();
      table.string("image8").notNullable();
      table.string("image9").notNullable();
      table.string("image10").notNullable();
      table
        .integer("board_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("board")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("images")
    .dropTable("palette")
    .dropTable("board");
};
