/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("basecolor", (table) => {
      table.increments("id").primary();
      table.string("color_name").notNullable();
      table.string("color_hex").notNullable();
    })
    .createTable("keywords", (table) => {
      table.increments("id").primary();
      table.string("keyword_name").notNullable();
    })
    .createTable("basecolor_keyword", (table) => {
      table.increments("id").primary();
      table
        .integer("basecolor_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("basecolor")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("keyword_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("keywords")
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
    .dropTable("basecolor_keyword")
    .dropTable("keywords")
    .dropTable("basecolor");
};
