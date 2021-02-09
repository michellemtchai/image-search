'use strict';

// load .env variables
require('dotenv').config();

// App
const express = require('express');
const app = express();

// setup app
const bootstrap = require('./config/bootstrap');
bootstrap(app, express);

// start listening at port
let server = app.listen(
    process.env.PORT,
    process.env.HOST,
    () => {
        console.log(
            'App listening at http://%s:%s',
            server.address().address,
            server.address().port
        );
    }
);
