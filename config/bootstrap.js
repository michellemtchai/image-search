module.exports = (router, express) => {
    let app = {
        router: router,
        express: express,
        shared: require('./shared'),
        rootPath: require('path').resolve(__dirname, '../'),
    };

    // initialize app
    require('./initialize')(app);

    // loads controllers
    app.shared.importControllers(app);

    // loads routes
    require('./routes')(app);
};
