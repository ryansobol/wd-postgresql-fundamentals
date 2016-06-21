[![Build][build-img]][build-url]

```shell
git clone blah
cd blah
npm install
pg_ctl init -D pg
postgres -D pg
createdb yowl
./node_modules/.bin/knex migrate:latest
./node_modules/.bin/knex seed:run
```

[build-img]: https://img.shields.io/travis/ryansobol/wd-yowl/master.svg?style=flat-square
[build-url]: https://travis-ci.org/ryansobol/wd-yowl
