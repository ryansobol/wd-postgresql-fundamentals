'use strict';

module.exports = {
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
