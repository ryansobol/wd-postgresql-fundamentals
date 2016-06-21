'use strict';

module.exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(table) {
    table.increments('id');
    table.integer('restaurant_id')
      .references('id')
      .inTable('restaurants')
      .onDelete('CASCADE')
      .index();
    table.string('name');
    table.text('description');
    table.decimal('cost');
    table.timestamp('vegetarian_at');
    table.timestamp('gluten_free_at');
    table.timestamps();
  });
};

module.exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dishes');
};
