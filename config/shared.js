const mongoose = require('mongoose');
const fs = require('fs');
let models = {};
let controllers = {};

module.exports = self = {
    mongoose: mongoose,
    models: models,
    controllers: controllers,
    createModel: (name, schema)=>{
        return mongoose.model(name, new mongoose.Schema(schema));
    },
    fileAction: (dir, action)=>{
        fs.readdirSync(dir).forEach(file=>
            action(
                file.substring(0, file.length-3)
            )
        );
    },
    importModels: (app)=>{
        self.fileAction('models', (file)=>{
            models[file] = require('../models/'+file)(app);
        });
    },
    importControllers: (app)=>{
        self.fileAction('controllers', (file)=>{
            controllers[file] = require('../controllers/'+file)(app);
        });
    },
};
