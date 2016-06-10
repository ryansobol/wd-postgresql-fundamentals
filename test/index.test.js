'use strict';

const chai = require('chai');
const {assert} = chai;
const chaiAsPromised = require('chai-as-promised');
const {suite, test} = require('mocha');

const env = process.env.NODE_ENV || 'development';
const knexConfig = require('../knexfile')[env];
const knex = require('knex')(knexConfig);

const index = require('../lib/index');

chai.use(chaiAsPromised);

suite('index', function() {
  before(function(done) {
    knex.migrate.rollback()
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  beforeEach(function(done) {
    knex.migrate.latest()
    .then(() => {
      return knex.seed.run();
    })
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  afterEach(function(done) {
    knex.migrate.rollback()
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  test('find customer names', function() {
    const actual = index.findCustomerNames(knex);
    const expected = [
      { name: 'Johnny Walker' },
      { name: 'Percy DoLittle' },
      { name: "Rainbow Huff'n'Puff" },
      { name: 'Prince' },
      { name: 'Sue "McGonnigal" Samwortherton' },
      { name: 'Little baby Tomkins' }
    ];

    return assert.eventually.sameDeepMembers(actual, expected);
  });
});
