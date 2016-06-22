'use strict';

module.exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', function(table) {
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
    table.enu('rating', ['1', '2', '3', '4', '5']);
    table.text('comment');
    table.timestamps();
  });
};

module.exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews');
};
