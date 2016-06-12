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
        created_at: new Date(2000, 5, 20),
        updated_at: new Date(2000, 5, 20)
      },
      {
        id: 2,
        name: "McDouglas's Irish Fusion Cafe",
        kind: 'Irish/Thai',
        bio: "You can't believe what this amazing Thai Irish pub fusion creates. Trust us, you'll love it.",
        dollars: '2',
        opened_at: new Date(2015,11,31),
        created_at: new Date(2000, 5, 20),
        updated_at: new Date(2000, 5, 20)
      },
      {
        id: 3,
        name: "Joe's Burritos",
        kind: 'Mexican',
        bio: "Not the best burrito in town, if you want better, try Jose's.",
        dollars: '1',
        opened_at: new Date(1997, 7, 22),
        created_at: new Date(2000, 5, 20),
        updated_at: new Date(2000, 5, 20)
      },
      {
        id: 4,
        name: "Chan's China Palace",
        kind: 'Chinese',
        bio: 'A hidden gem in the Pacific Northwest. Upscale dining with an incredible menu and great wait staff.',
        dollars: '4',
        opened_at: new Date(1991, 3, 8),
        created_at: new Date(2000, 5, 20),
        updated_at: new Date(2000, 5, 20)
      },
      {
        id: 5,
        name: "Benny's Meatballs",
        kind: 'Italian',
        bio: 'The best meatballs in town! Affordable and tasty, these meatballs will have you coming back for more.',
        dollars: '3',
        opened_at: new Date(2004, 10, 17),
        created_at: new Date(2000, 5, 20),
        updated_at: new Date(2000, 5, 20)
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
        created_at: new Date(2000, 5, 20),
        updated_at: new Date(2000, 5, 20)
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
        created_at: new Date(2000, 5, 20),
        updated_at: new Date(2000, 5, 20)
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
        created_at: new Date(2000, 5, 20),
        updated_at: new Date(2000, 5, 20)
      }
    ];

    return assert.eventually.deepEqual(actual, expected);
  });

  // TODO: still need to create a test for updateCustomerName

  test('update dish with chicken', () => {
    // TODO: this needs to test the properties of the updated dish not the
    // response code

    const actual = index.updateDishWithChx(knex);
    const expected = 1;

    return assert.eventually.deepEqual(actual, expected);
  });
});
