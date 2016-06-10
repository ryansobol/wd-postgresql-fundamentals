'use strict';

module.exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('locations').del(),

    knex('locations').insert({
      id: 1,
      restaurant_id: 1,
      street: '123 Somewhere Street',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98109',
      phone: '206-555-1234',
      created_at: new Date(),
      updated_at: new Date()
    }),

    knex('locations').insert({
      id: 2,
      restaurant_id: 1,
      street: '456 Central Avenue',
      city: 'Tacoma',
      state: 'WA',
      zipcode: '98401',
      phone: '206-555-5678',
      created_at: new Date(),
      updated_at: new Date()
    }),

    knex('locations').insert({
      id: 3,
      restaurant_id: 2,
      street: '1289 Dublin Way',
      city: 'Olympia',
      state: 'WA',
      zipcode: '98501',
      phone: '206-555-8329',
      created_at: new Date(),
      updated_at: new Date()
    }),

    knex('locations').insert({
      id: 4,
      restaurant_id: 3,
      street: '1111 Taco Street',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98107',
      phone: '206-555-0990',
      created_at: new Date(),
      updated_at: new Date()
    })

    // knex('locations').insert({
    //   id: 2,
    //   name: '',
    //   kind: '',
    //   bio: '',
    //   dollars: '',
    //   opened_at: new Date()
    // }),
    //
    // knex('locations').insert({
    //   id: 3,
    //   name: '',
    //   kind: '',
    //   bio: '',
    //   dollars: '',
    //   opened_at: new Date()
    // })
  );
};
