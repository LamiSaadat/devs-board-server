/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("user", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("username").notNullable();
      table.string("password").notNullable();
    })
    .createTable("board", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("user")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
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
        .references("id")
        .inTable("board")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("images", (table) => {
      table.increments("id").primary();
      table.string("image1");
      table.string("image2");
      table.string("image3");
      table.string("image4");
      table.string("image5");
      table.string("image6");
      table.string("image7");
      table.string("image8");
      table.string("image9");
      table.string("image10");
      table
        .integer("board_id")
        .unsigned()
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
    .dropTable("board")
    .dropTable("user");
};
