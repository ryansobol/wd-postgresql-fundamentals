'use strict';

module.exports.up = function(knex, Promise) {
  return knex.schema.createTable('reservations', function(table) {
    table.increments('id');
    table.integer('customer_id')
      .references('id')
      .inTable('customers')
      .onDelete('CASCADE')
      .index();
    table.integer('restaurant_id')
      .references('id')
      .inTable('restaurants')
      .onDelete('CASCADE')
      .index();
    table.boolean('wants_vegetarian');
    table.boolean('wants_gluten_free');
    table.timestamp('confirmed_at');
    table.timestamps();
  });
};

module.exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reservations');
};
