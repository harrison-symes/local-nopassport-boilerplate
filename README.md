# simple local strategy auth boilerplate

- local strategy auth
- jwt
- no passport
- public and protected routes
- no social login
- bcryptjs instead of sodium

set up:
cp .env.example .env

based on:
https://github.com/dev-academy-challenges/boilerplate-local-jwt-auth
and
https://github.com/hihi-2017/phase-2-boilerplate

## SETTING UP

  * `npm i`  of course you have to do this, we should all know this by now
  * `npm run dev` to watch locally
  * `knex migrate:latest` to create the users table
  * `knex seed:run` if you want a seeded test user, username is `goodman`, password is... `password`
  * rename `.env_example` to `.env`

  Get some console logs going in the code to see what is happening where :)
