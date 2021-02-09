# README
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is a dockerized `Node` app that is organized to serve as a boilerplate for an web app. It organizes the features as listed in the following:
- models (using MongoDB)
- controllers (routes)
- documentation (via APIDoc)
- database management (via Mongo Express)

## Requirement
You will need `Docker` to run this app.

## Running this app
### Development Mode
First, you will need to create an `.env` so that `Docker` knows where to look for its `docker-compose.yml` file. In order to do that, run the following:
```
cp ./docker/dev.env .env
```
Then, you need to run the following to get the server and the database running:
```
docker-compose up
```
You can access the app on your browser via the following url:
```
http://localhost:3000
```

### Production Mode
Like in the development mode, you need to
```
cp ./docker/prod.env .env
```
Then, you need to run the following to get the server and the database running:
```
docker-compose up
```
You can access the app on your browser via the following url:
```
http://localhost:3000
```

## Tools
### Mongo Express
You can access the database content using your browser via the following url:
```
http://localhost:8081
```

### API Documentation
You can generate api documentation into the folder `.apidocs` by running the following command:
```
docker-compose run app npm run doc
```
