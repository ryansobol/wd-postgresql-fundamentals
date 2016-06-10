'use strict';

// Define a function named findCustomerNames that takes one argument
//    knex (knex object)
//
// Return a promise
module.exports.findCustomerNames = function(knex) {
  return knex('customers').select('name');
}
