module.exports = (app) =>{
    let { History } = app.shared.models;

    return {
        /**
         * @api {get} /search Get result of image search given query
         * @apiVersion 1.0.0
         * @apiGroup ImageSearch
         *
         * @apiParam {String} query Query for image search.
         * @apiParamExample {json} Request-Example:
         *     {
         *       "query": "cats"
         *     }
         *
         * @apiSuccess {String} query Query made during image search.
         * @apiSuccess {Date} date Time this search was made.
         *
         * @apiSuccessExample {json} Success-Response:
         *     HTTP/1.1 200 OK
         *     [{
         *       "query": "cats",
         *       "date": "1970-01-01T00:00:00.000Z"
         *     }]
         *
         * @apiErrorExample {json} Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "msg": "{error message}"
         *     }
         */
        index: (req, res) => {
            app.shared.modelFind(History, res,
                items => res.json(items)
            );
        },

        /**
         * @api {get} /search/recent Get all previous search result
         * @apiVersion 1.0.0
         * @apiGroup ImageSearch
         *
         * @apiSuccess {String} query Query made during image search.
         * @apiSuccess {Date} date Time this search was made.
         *
         * @apiSuccessExample {json} Success-Response:
         *     HTTP/1.1 200 OK
         *     [{
         *       "query": "cats",
         *       "date": "1970-01-01T00:00:00.000Z"
         *     }]
         *
         * @apiErrorExample {json} Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "msg": "{error message}"
         *     }
         */
        recent: (req, res) => {
            app.shared.modelFind(History, res,
                items => res.json(items)
            );
        }
    };
};