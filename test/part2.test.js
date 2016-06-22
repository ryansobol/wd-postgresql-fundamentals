'use strict';

const chai = require('chai');
const {assert} = chai;
const {suite, test} = require('mocha');

const env = 'part2';
const knexConfig = require('../knexfile')[env];
const knex = require('knex')(knexConfig);

const path = require('path');
const extractSQL = require('./extract_sql');
const sql = extractSQL(path.join(__dirname, '..', 'lib', 'part2.sql'));

// const chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);

suite('part2', () => {
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

  test('select all restaurants', (done) => {
    knex.raw(sql.selectAllRestaurants)
      .then((result) => {
        const actual = result.rows;
        const expected = [
          {
            id: 1,
            name: "Hal's Hot Dawg Stand",
            kind: 'American',
            bio: "Hal's is the place for all your burgers and dawg needs.",
            dollars: 1,
            opened_at: new Date('1977-03-01 00:00:00 UTC'),
            created_at: new Date('2000-05-20 00:00:00 UTC'),
            updated_at: new Date('2000-05-20 00:00:00 UTC')
          }, {
            id: 2,
            name: "McDouglas's Irish Fusion Cafe",
            kind: 'Irish/Thai',
            bio: "You can't believe what this amazing Thai Irish pub fusion creates. Trust us, you'll love it.",
            dollars: 2,
            opened_at: new Date('2015-11-31 00:00:00 UTC'),
            created_at: new Date('2000-05-20 00:00:00 UTC'),
            updated_at: new Date('2000-05-20 00:00:00 UTC')
          }, {
            id: 3,
            name: "Joe's Burritos",
            kind: 'Mexican',
            bio: "Not the best burrito in town, if you want better, try Jose's.",
            dollars: 1,
            opened_at: new Date('1997-07-22 00:00:00 UTC'),
            created_at: new Date('2000-05-20 00:00:00 UTC'),
            updated_at: new Date('2000-05-20 00:00:00 UTC')
          }, {
            id: 4,
            name: "Chan's China Palace",
            kind: 'Chinese',
            bio: 'A hidden gem in the Pacific Northwest. Upscale dining with an incredible menu and great wait staff.',
            dollars: 4,
            opened_at: new Date('1991-03-08 00:00:00 UTC'),
            created_at: new Date('2000-05-20 00:00:00 UTC'),
            updated_at: new Date('2000-05-20 00:00:00 UTC')
          }, {
            id: 5,
            name: "Benny's Meatballs",
            kind: 'Italian',
            bio: 'The best meatballs in town! Affordable and tasty, these meatballs will have you coming back for more.',
            dollars: 3,
            opened_at: new Date('2004-10-17 00:00:00 UTC'),
            created_at: new Date('2000-05-20 00:00:00 UTC'),
            updated_at: new Date('2000-05-20 00:00:00 UTC')
          }
        ];

        assert.sameDeepMembers(actual, expected);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('select all restaurant names', (done) => {
    knex.raw(sql.selectAllRestaurantNames)
      .then((result) => {
        const actual = result.rows;
        const expected = [
          { name: "Hal's Hot Dawg Stand" },
          { name: "McDouglas's Irish Fusion Cafe" },
          { name: "Joe's Burritos" },
          { name: "Chan's China Palace" },
          { name: "Benny's Meatballs" }
        ];

        assert.sameDeepMembers(actual, expected);
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
          { name: "Rainbow Huff'n'Puff" },
          { name: 'Prince' },
          { name: 'Sue "McGonnigal" Samwortherton' },
          { name: 'Little baby Tomkins' }
        ];

        assert.sameDeepMembers(actual, expected);
        done();
      })
      .catch((err) => {
        done(err);
      })
  });

  test('select customer by id', (done) => {
    knex.raw(sql.selectCustomerById)
      .then((result) => {
        const actual = result.rows;
        const expected = [{
          id: 1,
          name: 'Johnny Walker',
          email: 'drinks@home.com',
          created_at: new Date('2000-05-20 00:00:00 UTC'),
          updated_at: new Date('2000-05-20 00:00:00 UTC')
        }];

        assert.deepEqual(actual, expected);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('select location by id', (done) => {
    knex.raw(sql.selectLocationById)
      .then((result) => {
        const actual = result.rows;
        const expected = [{
          id: 3,
          restaurant_id: 2,
          street: '1289 Dublin Way',
          city: 'Olympia',
          state: 'WA',
          zipcode: '98501',
          phone: '206-555-8329',
          created_at: new Date('2000-05-20 00:00:00 UTC'),
          updated_at: new Date('2000-05-20 00:00:00 UTC')
        }];

        assert.deepEqual(actual, expected);
        done();
      })
      .catch((err) => {
        done(err);
      })
  });

  test('select count of all locations by city', (done) => {
    knex.raw(sql.selectCountOfAllLocationsByCity)
      .then((result) => {
        const actual = result.rows;
        const expected = [{ count: '7' }];

        assert.deepEqual(actual, expected);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('select distinct count of all locations by city', (done) => {
    knex.raw(sql.selectDistinctCountOfAllLocationsByCity)
      .then((result) => {
        const actual = result.rows;
        const expected = [{ count: '3' }];

        assert.deepEqual(actual, expected);
        done();
      })
      .catch((err) => {
        done(err);
      })
  });

  test('select cheapest dish', (done) => {
    knex.raw(sql.selectCheapestDish)
      .then((result) => {
        const actual = result.rows;
        const expected = [{
          id: 1,
          restaurant_id: 1,
          name: 'the killer chili dawg',
          description: 'The ULTIMATE test.',
          cost: '7.65',
          vegetarian_at: null,
          gluten_free_at: null,
          created_at: new Date('2000-05-20 00:00:00 UTC'),
          updated_at: new Date('2000-05-20 00:00:00 UTC')
        }];

        assert.deepEqual(actual, expected);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('update customer name', (done) => {
    knex.raw(sql.updateCustomerName)
      .then((result) => {
        const actual = result.rowCount;
        const expected = 1;

        return assert.equal(actual, expected);
      })
      .then(() => {
        return knex('customers')
          .where('name', 'Little baby Tomkins')
          .then((actual) => {
            return assert.deepEqual(actual, []);
          });
      })
      .then(() => {
        return knex('customers')
          .where('name', 'Big Tom Tomkins')
          .then((actual) => {
            const expected = [{
              id: 6,
              name: 'Big Tom Tomkins',
              email: 'whaaaaa@ups.com',
              created_at: new Date('2000-05-20 00:00:00 UTC'),
              updated_at: new Date('2000-05-20 00:00:00 UTC')
            }];

            return assert.deepEqual(actual, expected);
          });
      })
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('update location by id', (done) => {
    knex.raw(sql.updateLocationById)
      .then((result) => {
        const actual = result.rowCount;
        const expected = 1;

        return assert.equal(actual, expected);
      })
      .then(() => {
        return knex('locations')
          .where('id', 3)
          .then((actual) => {
            const expected = [{
              id: 3,
              restaurant_id: 2,
              street: '555 No Way',
              city: 'Olympia',
              state: 'WA',
              zipcode: '98501',
              phone: '206-555-8329',
              created_at: new Date('2000-05-20 00:00:00 UTC'),
              updated_at: new Date('2000-05-20 00:00:00 UTC')
            }];

            return assert.deepEqual(actual, expected);
          });
      })
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  // test('update dish with chicken', () => {
  //   const actual = sql.updateDishWithChicken(knex);
  //   const expected = 1;
  //
  //   return assert.eventually.equal(actual, expected);
  // });
  //
  // test('delete customer', () => {
  //   const actual = sql.deleteCustomer(knex);
  //   const expected = 1;
  //
  //   return assert.eventually.equal(actual, expected);
  // });
  //
  // test('delete restaurants by dollar', () => {
  //   const actual = sql.deleteRestaurantsByDollar(knex);
  //   const expected = 2;
  //
  //   return assert.eventually.equal(actual, expected);
  // });
  //
  // test('delete all vegetarian dishes', () => {
  //   const actual = sql.deleteAllVegetarianDishes(knex);
  //   const expected = 2;
  //
  //   return assert.eventually.equal(actual, expected);
  // });
});
