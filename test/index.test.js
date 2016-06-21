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

suite('index', () => {
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

  test('select all restaurants', () => {
    const actual = index.selectAllRestaurants(knex);
    const expected = [
      {
        id: 1,
        name: "Hal's Hot Dawg Stand",
        kind: 'American',
        bio: "Hal's is the place for all your burgers and dawg needs.",
        dollars: '1',
        opened_at: new Date(1977, 3, 1),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      },
      {
        id: 2,
        name: "McDouglas's Irish Fusion Cafe",
        kind: 'Irish/Thai',
        bio: "You can't believe what this amazing Thai Irish pub fusion creates. Trust us, you'll love it.",
        dollars: '2',
        opened_at: new Date(2015,11,31),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      },
      {
        id: 3,
        name: "Joe's Burritos",
        kind: 'Mexican',
        bio: "Not the best burrito in town, if you want better, try Jose's.",
        dollars: '1',
        opened_at: new Date(1997, 7, 22),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      },
      {
        id: 4,
        name: "Chan's China Palace",
        kind: 'Chinese',
        bio: 'A hidden gem in the Pacific Northwest. Upscale dining with an incredible menu and great wait staff.',
        dollars: '4',
        opened_at: new Date(1991, 3, 8),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      },
      {
        id: 5,
        name: "Benny's Meatballs",
        kind: 'Italian',
        bio: 'The best meatballs in town! Affordable and tasty, these meatballs will have you coming back for more.',
        dollars: '3',
        opened_at: new Date(2004, 10, 17),
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      }
    ];

    return assert.eventually.sameDeepMembers(actual, expected);
  });

  test('select all restaurant names', () => {
    const actual = index.selectAllRestaurantNames(knex);
    const expected = [
      { name: "Hal's Hot Dawg Stand" },
      { name: "McDouglas's Irish Fusion Cafe" },
      { name: "Joe's Burritos" },
      { name: "Chan's China Palace" },
      { name: "Benny's Meatballs" }
    ];

    return assert.eventually.sameDeepMembers(actual, expected);
  });

  test('select all customer names', () => {
    const actual = index.selectAllCustomerNames(knex);
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

  test('select customer by id', () => {
    const actual = index.selectCustomerById(knex);
    const expected = [
      {
        id: 1,
        name: 'Johnny Walker',
        email: 'drinks@home.com',
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      }
    ];

    return assert.eventually.deepEqual(actual, expected);
  });

  test('select location by id', () => {
    const actual = index.selectLocationById(knex);
    const expected = [
      {
        id: 3,
        restaurant_id: 2,
        street: '1289 Dublin Way',
        city: 'Olympia',
        state: 'WA',
        zipcode: '98501',
        phone: '206-555-8329',
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      }
    ];

    return assert.eventually.deepEqual(actual, expected);
  });

  test('select count of location cities', () => {
    const actual = index.selectCountOfLocationCities(knex);
    const expected = [{ count: '7' }];

    return assert.eventually.deepEqual(actual, expected);
  });

  test('select distinct count of location cities', () => {
    const actual = index.selectDistinctCountOfLocationCities(knex);
    const expected = [{ count: '3' }];

    return assert.eventually.deepEqual(actual, expected);
  });

  test('select cheapest dish', () => {
    const actual = index.selectCheapestDish(knex);
    const expected = [
      {
        id: 1,
        restaurant_id: 1,
        name: 'the killer chili dawg',
        description: 'The ULTIMATE test.',
        cost: '7.65',
        vegetarian_at: null,
        gluten_free_at: null,
        created_at: new Date('2000-05-20 00:00:00 UTC'),
        updated_at: new Date('2000-05-20 00:00:00 UTC')
      }
    ];

    return assert.eventually.deepEqual(actual, expected);
  });

  // TODO: write insert tests here

  // TODO: update queries need to test the data that was updated, not response
  // text
  test('update customer name', () => {
    index.updateCustomerName(knex).then(() => {
      knex('customers').select()
      .where('name', 'Little baby Tomkins')
      .then((actual) => {
        assert.deepEqual(actual, []);
      });

      knex('customers').select()
      .where('name', 'Big Tom Tomkins')
      .then((actual) => {
        const expected = [
          {
            id: 6,
            name: 'Big Tom Tomkins',
            email: 'whaaaaa@ups.com',
            created_at: new Date('2000-05-20 00:00:00 UTC'),
            updated_at: new Date('2000-05-20 00:00:00 UTC')
          }
        ];

        assert.deepEqual(actual, expected);
      });
    });
  });

  test('update location by id', () => {
    const actual = index.updateLocationById(knex);
    const expected = 1;

    return assert.eventually.deepEqual(actual, expected);
  });

  test('update dish with chicken', () => {
    const actual = index.updateDishWithChx(knex);
    const expected = 1;

    return assert.eventually.deepEqual(actual, expected);
  });

  test('delete customer', () => {
    const actual = index.deleteCustomer(knex);
    const expected = '';

    return assert.eventually.deepEqual(actual, expected);
  });

  test('delete restaurants by dollar', () => {
    const actual = index.deleteRestaurantsByDollar(knex);
    const expected = '';

    return assert.eventually.deepEqual(actual, expected);
  });

  test('delete all vegetarian dishes', () => {
    const actual = index.deleteAllVegetarianDishes(knex);
    const expected = 2;

    return assert.eventually.deepEqual(actual, expected);
  });
});
