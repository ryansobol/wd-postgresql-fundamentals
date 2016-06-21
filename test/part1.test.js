'use strict';

const chai = require('chai');
const {assert} = chai;
const chaiAsPromised = require('chai-as-promised');
const {suite, test} = require('mocha');

const env = 'part1';
const knexConfig = require('../knexfile')[env];
const knex = require('knex')(knexConfig);

const part = require('../lib/part1');

chai.use(chaiAsPromised);

suite('part1', () => {
  beforeEach(function(done) {
    knex.schema
      .dropTableIfExists('customers')
      .dropTableIfExists('restaurants')
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      })
  });

  test('create customers table', (done) => {
    knex.raw(part.createCustomers())
      .then(() => {
        return knex.raw(`
          SELECT column_name, data_type, is_nullable
          FROM information_schema.columns
          WHERE table_name='customers';
        `);
      })
      .then((result) => {
        const actual = result.rows;
        const expected = [
          {
            column_name: 'id',
            data_type: 'integer',
            is_nullable: 'NO',
          }, {
            column_name: 'name',
            data_type: 'character varying',
            is_nullable: 'YES',
          }, {
            column_name: 'email',
            data_type: 'character varying',
            is_nullable: 'YES'
          }, {
            column_name: 'created_at',
            data_type: 'timestamp with time zone',
            is_nullable: 'YES'
          }, {
            column_name: 'updated_at',
            data_type: 'timestamp with time zone',
            is_nullable: 'YES'
          }
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

  test('create restaurants table', (done) => {
    knex.raw(part.createRestaurants())
      .then(() => {
        return knex.raw(`
          SELECT column_name, data_type, is_nullable
          FROM information_schema.columns
          WHERE table_name='restaurants';
        `);
      })
      .then((result) => {
        const actual = result.rows;
        const expected = [
          {
            column_name: 'id',
            data_type: 'integer',
            is_nullable: 'NO',
          }, {
            column_name: 'name',
            data_type: 'character varying',
            is_nullable: 'YES',
          }, {
            column_name: 'kind',
            data_type: 'character varying',
            is_nullable: 'YES'
          }, {
            column_name: 'bio',
            data_type: 'text',
            is_nullable: 'YES'
          }, {
            column_name: 'dollars',
            data_type: 'integer',
            is_nullable: 'YES'
          }, {
            column_name: 'opened_at',
            data_type: 'timestamp with time zone',
            is_nullable: 'YES'
          }, {
            column_name: 'created_at',
            data_type: 'timestamp with time zone',
            is_nullable: 'YES'
          }, {
            column_name: 'updated_at',
            data_type: 'timestamp with time zone',
            is_nullable: 'YES'
          }
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
