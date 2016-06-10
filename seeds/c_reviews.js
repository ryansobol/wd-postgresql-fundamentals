'use strict';

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('reviews').del(),

    knex('reviews').insert({
      id: 1,
      customer_id: 1,
      restaurant_id: 1,
      rating: '2',
      comment: 'The killer chili dawg was not kidding around. It killed my spirit and because of that I will not be returning to Hal\'s',
      created_at: new Date(),
      updated_at: new Date()
    })
  );
};
