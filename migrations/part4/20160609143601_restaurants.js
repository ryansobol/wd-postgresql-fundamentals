'use strict';

module.exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', function(table) {
    table.increments('id');
    table.string('name');
    table.string('kind');
    table.text('bio');
    table.enu('dollars', ['1', '2', '3', '4', '5']);
    table.timestamp('opened_at');
    table.timestamps();
  });
};

module.exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants');
};
