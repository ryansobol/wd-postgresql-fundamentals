'use strict';

module.exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', function(table) {
    table.increments('id');
    table.integer('restaurant_id')
      .references('id')
      .inTable('restaurants')
      .onDelete('CASCADE')
      .index();
    table.string('street');
    table.string('city');
    table.string('state');
    table.string('zipcode');
    table.string('phone');
    table.timestamps();
  });
};

module.exports.down = function(knex, Promise) {
  return knex.schema.dropTable('locations');
};
