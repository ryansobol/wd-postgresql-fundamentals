```shell
git clone blah
cd blah
pg_ctl init -D pg
postgres -D pg
createdb pgci
./node_modules/.bin/knex migrate:make players
./node_modules/.bin/knex migrate:latest
./node_modules/.bin/knex seed:make players
./node_modules/.bin/knex seed:run
```
