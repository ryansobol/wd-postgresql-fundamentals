'use strict';

const environment = process.env.NODE_ENV || 'development';

const knexConfig = require('./knexfile')[environment];

const knex = require('knex')(knexConfig);

knex('players').select().then(function(data) {
  console.log(data);
  process.exit(1);
});
