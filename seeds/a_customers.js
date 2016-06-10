'use strict';

module.exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('customers').del(),

    knex('customers').insert({
      id: 1,
      name: 'Johnny Walker',
      email: 'drinks@home.com',
      created_at: new Date(2000, 5, 20),
      updated_at: new Date(2000, 5, 20)
    }),

    knex('customers').insert({
      id: 2,
      name: 'Percy DoLittle',
      email: 'getterdone@gmail.com',
      created_at: new Date(2000, 5, 20),
      updated_at: new Date(2000, 5, 20)
    }),

    knex('customers').insert({
      id: 3,
      name: 'Rainbow Huff\'n\'Puff',
      email: 'after1234@aol.com',
      created_at: new Date(2000, 5, 20),
      updated_at: new Date(2000, 5, 20)
    }),

    knex('customers').insert({
      id: 4,
      name: 'Prince',
      email: '@',
      created_at: new Date(2000, 5, 20),
      updated_at: new Date(2000, 5, 20)
    }),

    knex('customers').insert({
      id: 5,
      name: 'Sue "McGonnigal" Samwortherton',
      email: 'theCharmer@hotmail.com',
      created_at: new Date(2000, 5, 20),
      updated_at: new Date(2000, 5, 20)
    }),

    knex('customers').insert({
      id: 6,
      name: 'Little baby Tomkins',
      email: 'whaaaaa@ups.com',
      created_at: new Date(2000, 5, 20),
      updated_at: new Date(2000, 5, 20)
    })
  );
};
