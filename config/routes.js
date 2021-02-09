// central location to define routes
module.exports = (app) =>{
    let {
        Application,
        ImageSearch,
    } = app.shared.controllers;

    /**
    *
    * You can start defining your routes below.
    *
    */
    app.router.get('/', Application.index);

    app.router.get('/query/:query', ImageSearch.index);
    app.router.get('/recent', ImageSearch.recent);
};