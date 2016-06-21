'use strict';

module.exports = {
  part1: {
    client: 'pg',
    connection: 'postgres://localhost/yowl_part1'
  },

  part2: {
    client: 'pg',
    connection: 'postgres://localhost/yowl_part2',
    migrations: {
      directory: './migrations/part2'
    },
    seeds: {
      directory: './seeds/part2'
    }
  },

  part4: {
    client: 'pg',
    connection: 'postgres://localhost/yowl_part4',
    migrations: {
      directory: './migrations/part4'
    },
    seeds: {
      directory: './seeds/part4'
    }
  }
};
