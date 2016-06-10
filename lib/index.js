'use strict';

// Define a function named findCustomerNames that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns the names of all the customers
// from the database.
//
// Example:
//    [
//      { name: 'Johnny Walker' },
//      { name: 'Percy DoLittle' },
//      ...
//    ]
module.exports.findCustomerNames = function(knex) {
  return knex('customers').select('name');
}

// SELECT | selectWhatever
// INSERT | createWhatever
// UPDATE | updateWhatever
// DELETE | deleteWhatever
