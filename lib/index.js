'use strict';

// Define a function named selectAllRestaurants that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns all the restaurants as an array
// of objects
//
// Example:
//    [
//      {
//        id: 1,
//        name: "Hal's Hot Dawg Stand",
//        kind: 'American',
//        bio: "Hal's is the place for all your burgers and dawg needs.",
//        dollars: '1',
//        opened_at: new Date(1977, 3, 1),
//        created_at: new Date(2000, 5, 20),
//        updated_at: new Date(2000, 5, 20)
//      },
//      ...
//    ]
module.exports.selectAllRestaurants = function(knex) {
  return knex('restaurants').select();
};

// Define a function named selectAllRestaurantNames that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns all the restaurant names as an
// array of objects
//
// Example:
//    [
//      { name: "Hal's Hot Dawg Stand" },
//      { name: "McDouglas's Irish Fusion Cafe" },
//      ...
//    ]
module.exports.selectAllRestaurantNames = function(knex) {
  return knex('restaurants').select('name');
};

// Define a function named selectAllCustomerNames that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns all the customer names as an
// array of objects
//
// Example:
//    [
//      { name: 'Johnny Walker' },
//      { name: 'Percy DoLittle' },
//      ...
//    ]
module.exports.selectAllCustomerNames = function(knex) {
  return knex('customers').select('name');
};

// Define a function named selectCustomerById that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns customer information as a
// single object in an array
//
// Example:
//    [
//      {
//        id: 1,
//        name: 'Johnny Walker',
//        email: 'drinks@home.com',
//        ...
//      }
//    ]
module.exports.selectCustomerById =  function(knex) {
  return knex('customers').where('id', 1);
};

// Define a function named selectLocationById that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns location information as a
// single object in an array
//
// Example:
//    [
//      {
//        id: 3,
//        restaurant_id: 2,
//        street: '1289 Dublin Way',
//        ...
//      }
//    ]
module.exports.selectLocationById =  function(knex) {
  return knex('locations').where('id', 3);
};

// Define a function named selectCountOfLocationCities that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns the total number of locations
// as the only object in an array
//
// Example:
//    [{ count: '7' }]
module.exports.selectCountOfLocationCities = function(knex) {
  return knex('locations').count('city');
};

// Define a function named selectDistinctCountOfLocationCities that takes one
// argument
//    knex (knex object)
//
// Return a knex promise that eventually returns the total number of distinct
// cities as the only object in an array
//
// Example:
//    [{ count: '3' }]
module.exports.selectDistinctCountOfLocationCities = function(knex) {
  return knex('locations').countDistinct('city');
};

// Define a function named selectCheapestDish that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns information about the dish with
// the cheapest cost
//
// Example:
//    [
//      {
//        id: 1,
//        restaurant_id: 1,
//        name: 'the killer chili dawg',
//        description: 'The ULTIMATE test.',
//        cost: '7.65',
//        ...
//      }
//    ]
module.exports.selectCheapestDish = function(knex) {
  const subquery = knex('dishes').min('cost');
  return knex('dishes').where('cost', 'in', subquery);
};

// Basic Insert Queries:

// Define a function named addRestaurant that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.addRestaurant = function(knex) {
  return knex('restaurants').insert({
    id: 6,
    name: 'Sheesh Kebap',
    kind: 'Iranian',
    bio: 'Be amazed, our chef bobs like no other!',
    dollars: '4',
    opened_at: new Date(1977, 3, 1),
    created_at: new Date(2000, 4, 22),
    updated_at: new Date(2000, 4, 22)
  });
};

// Define a function named addCustomer that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.addCustomer = function(knex) {
  return knex('customers').insert({
    id: 7,
    name: 'the connoisseur',
    email: 'loveIt@bomb.com',
    created_at: new Date(2000, 4, 22),
    updated_at: new Date(2000, 4, 22)
  });
};

// Define a function named addNewDishToHals that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.addNewDishToHals = function(knex) {
  return knex('dishes').insert({
    id: 9,
    restaurant_id: 1,
    name: 'The Bog Dog',
    description: "This dawg hails from the depths of the bog! Made with real 'gator.",
    cost: 9.65,
    vegetarian_at: null,
    gluten_free_at: null,
    created_at: new Date(2000, 4, 22),
    updated_at: new Date(2000, 4, 22)
  });
};

// Define a function named addReservation that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.addReservation = function(knex) {
  return knex('reservations').insert({
    id: 7,
    customer_id: 4,
    restaurant_id: 3,
    wants_vegetarian: true,
    wants_gluten_free: false,
    confirmed_at: new Date(2000, 4, 22),
    created_at: new Date(2000, 4, 22),
    updated_at: new Date(2000, 4, 22)
  });
};

// Define a function named updateCustomerName that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.updateCustomerName = function(knex) {
  return knex('customers').where('name', 'Little baby Tomkins')
    .update({
      name: 'Big Tom Tomkins'
    });
};

// Define a function named updateLocationById that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.updateLocationById = function(knex) {
  return knex('locations').where('id', 3)
    .update({
      street: '555 No Way',
      city: 'Olympia'
    });
};

// Define a function named updateDishWithChx that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.updateDishWithChx = function(knex) {
  return knex('dishes').where('name', "Melinda's salad blend")
    .update({
      description: "Now with chicken! This is a wonderful blend of greens.",
      vegetarian_at: null
    });
};

// Define a function named deleteCustomer that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.deleteCustomer = function(knex) {
  // TODO: need to delete reservations and reviews before deleting customer
  return knex('customers').where('name', 'Prince').del();
};

// Define a function named deleteRestaurantsByDollar that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.deleteRestaurantsByDollar = function(knex) {
  // TODO: need to delete dishes, locations, reservations, and reviews before
  // deleting restaurant
  return knex('restaurants').where('dollars', '>', 2).del();
};

// Define a function named deleteAllVegetarianDishes that takes one argument
//    knex (knex object)
//
// Return a knex promise that eventually returns...
//
// Example:
//
module.exports.deleteAllVegetarianDishes = function(knex) {
  return knex('dishes').whereNot('vegetarian_at', null).del();
};

// module.exports. = function(knex) {
//   return knex('').;
// }
// SELECT | selectWhatever
// INSERT | createWhatever
// UPDATE | updateWhatever
// DELETE | deleteWhatever
