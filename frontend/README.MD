# README
## Requirement
You will need `Docker` to run this project.

## Running the App
This app can be run in two mode:
1. **development mode:** You get live reload from the browser, so it's faster than running build on the source code every time you make a change.
2. **production mode:** The source code is minimize and uglified to serve on ngnix.

To choose which mode you want to run the app, you have to create an `.env` file:
```
# for development
cp ./config/dev.env .env

# for production
cp ./config/prod.env .env
```
Then, you have to run `docker-compose up` to start the app. It will take a while for the docker image to build the first time, but you will be able to see the app at the following url in your browser of choice:
```
localhost:3000
```
