'use strict';

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('reservations').del(),

    knex('reservations').insert({
      id: 1,
      customer_id: 1,
      restaurant_id: 1,
      wants_vegetarian: false,
      wants_gluten_free: true,
      confirmed_at: new Date(),
      created_at: new Date(),
      updated_at: new Date()
    })
  );
};
