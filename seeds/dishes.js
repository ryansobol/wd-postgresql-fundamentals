
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('dishes').del(),

    knex('dishes').insert({
      id: 1,
      restaurant_id: 1,
      name: 'the killer chili dawg',
      description: 'The ULTIMATE test.',
      cost: 7.65,
      vegetarian_at: null,
      gluten_free_at: null,
      created_at: new Date(),
      updated_at: new Date()
    }),

    knex('dishes').insert({
      id: 2,
      restaurant_id: 1,
      name: 'Melinda\'s salad blend',
      description: 'This salad is good for the non-carne among you.',
      cost: 'American',
      vegetarian_at: new Date(1977, 3, 1),
      gluten_free_at: new Date(1977, 3, 1),
      created_at: new Date(),
      updated_at: new Date()
    })
    // knex('restaurants').insert({
    //   id: 2,
    //   name: '',
    //   kind: '',
    //   bio: '',
    //   dollars: '',
    //   opened_at: new Date()
    // }),
    //
    // knex('restaurants').insert({
    //   id: 3,
    //   name: '',
    //   kind: '',
    //   bio: '',
    //   dollars: '',
    //   opened_at: new Date()
    // })
  );
};
