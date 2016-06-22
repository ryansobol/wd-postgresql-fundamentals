'use strict';

module.exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', function(table) {
    table.increments('id');
    table.string('name');
    table.string('email');
    table.timestamps();
  });
};

module.exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers');
};
