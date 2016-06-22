'use strict';

const chai = require('chai');
const {assert} = chai;
const {suite, test} = require('mocha');

const env = 'part3';
const knexConfig = require('../knexfile')[env];
const knex = require('knex')(knexConfig);

const path = require('path');
const extractSQL = require('./extract_sql');
const sql = extractSQL(path.join(__dirname, '..', 'lib', 'part3.sql'));

// const chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);

suite('part3', () => {
  before(function(done) {

    knex.migrate.latest()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  beforeEach(function(done) {
    knex.seed.run()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('select all customer names', (done) => {
    knex.raw(sql.selectAllCustomerNames)
      .then((result) => {
        const actual = result.rows;
        const expected = [
          { name: 'Johnny Walker' },
          { name: 'Percy DoLittle' },
          { name: 'Rainbow Huff\'n\'Puff' },
          { name: 'Prince' },
          { name: 'Sue "McGonnigal" Samwortherton' },
          { name: 'Little baby Tomkins' }
        ];

        for (const row of expected) {
          assert.include(actual, row);
        }

        return assert.sameDeepMembers(actual, expected)
      })
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
