'use strict';

module.exports.createCustomers = function() {
  return `CREATE TABLE customers (
    id serial PRIMARY KEY,
    name varchar(255),
    email varchar(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
  );`;
};

module.exports.createRestaurants = function() {
  return `CREATE TABLE restaurants (
    id serial PRIMARY KEY,
    name varchar(255),
    kind varchar(255),
    bio text,
    dollars integer,
    opened_at timestamp with time zone,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
  );`;
};
