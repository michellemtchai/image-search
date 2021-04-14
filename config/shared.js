const fs = require('fs');
let controllers = {};

module.exports = self = {
    controllers: controllers,
    fileAction: (dir, action) => {
        fs.readdirSync(dir).forEach((file) =>
            action(file.substring(0, file.length - 3))
        );
    },
    importControllers: (app) => {
        self.fileAction('controllers', (file) => {
            controllers[file] = require('../controllers/' +
                file)(app);
        });
    },
};
