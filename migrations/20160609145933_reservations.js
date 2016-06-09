'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('reservations', function(table) {
    table.increments('id');
    table.integer('customer_id')
      .references('id')
      .inTable('customers')
      .index();
    table.integer('restaurant_id')
      .references('id')
      .inTable('restaurants')
      .index();
    table.boolean('wants_vegetarian');
    table.boolean('wants_gluten_free');
    table.timestamp('confirmed_at');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reservations');
};
