'use strict';

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('restaurants').del(),

    knex('restaurants').insert({
      id: 1,
      name: "Hal's Hot Dawg Stand",
      kind: 'American',
      bio: 'Hal\'s is the place for all your burgers and dawg needs. We have shakes galore!',
      dollars: '1',
      opened_at: new Date(1977, 3, 1),
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
