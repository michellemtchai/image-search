module.exports = (router, express) => {
    let app = {
        router: router,
        express: express,
        shared: require('./shared'),
    };

    // initialize app
    require('./initialize')(app);

    // loads controllers
    app.shared.importControllers(app);

    // loads routes
    require('./routes')(app);
};
