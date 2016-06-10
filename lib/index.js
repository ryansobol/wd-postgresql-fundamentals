'use strict';

// Define a function named selectCustomerNames that takes one argument
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

// Basic Select Queries:

module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}

module.exports.selectAllRestaurants = function(knex) {
  return knex('restaurants').select();
}

module.exports.selectCustomerById =  function(knex) {
  return knex('dishes').where('id', 1);
}

module.exports.selectCityById =  function(knex) {
  return knex('cities').where('id', 3);
}

module.exports.selectNumberOfDistinctCities = function(knex) {
  return knex('cities').countDistinct();
}

module.exports.selectCheapestDish = function(knex) {
  return knex('dishes').min('cost');
}


// Basic Insert Queries:
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
module.exports.selectCustomerNames = function(knex) {
  return knex('customers').select('name');
}
// SELECT | selectWhatever
// INSERT | createWhatever
// UPDATE | updateWhatever
// DELETE | deleteWhatever
