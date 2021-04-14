const common = require('../helpers/common');
const searchAPI = require('../helpers/search-api');

module.exports = ImageSearch = (app) => {
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
            let required = ['query'];
            let searchImage = () =>
                searchAPI.imageSearch(req, res);
            common.requiredParams(
                req.params,
                res,
                required,
                searchImage
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
            res.json([]);
        },
    };
};
