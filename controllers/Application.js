const manifestData = require('../assets/manifest');

module.exports = (app) => {
    return {
        /**
         * @api {get} / Get index page
         * @apiSampleRequest off
         * @apiVersion 1.0.0
         * @apiGroup Application
         */
        index: (req, res) => {
            if (process.env.APP_ENV === 'production') {
                res.sendFile('/app/public/index.html');
            } else {
                res.render('pages/index', {
                    rootPath: '../',
                    assets: {
                        js: [],
                        css: [],
                    },
                    icons: manifestData.icons,
                });
            }
        },
        /**
         * @api {get} %PUBLIC_URL%/manifest.json Get manifest.json
         * @apiSampleRequest off
         * @apiVersion 1.0.0
         * @apiGroup Application
         */
        manifest: (req, res) => {
            res.json(manifestData);
        },

        /**
         * @api {get} /robots.txt Get robots.txt
         * @apiSampleRequest off
         * @apiVersion 1.0.0
         * @apiGroup Application
         */
        robots: (req, res) => {
            res.sendFile('/app/assets/robots.txt');
        },
    };
};
