## Description

Small API to convert

## Running the app

```bash
$ docker-compose up
```

## Doc

visit: 0.0.0.0:3000/api

## Request
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/c61d780f1bfd5a2d51f5)

or
```bash
$ curl --location --request POST '0.0.0.0:3000/convert' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "roman": "XX"
  }'
```
## Test

```bash
# unit tests
$ docker-compose run app npm run test
```