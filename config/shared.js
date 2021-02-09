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
    errorResponse: (res)=>{
        return (err)=>res.status(404).json({ msg: err.message });
    },
    requiredParams: (params, res, required, action)=>{
        let lacking = [];
        required.forEach(i=>{
            if(!params.hasOwnProperty(i)){
                lacking.push(i);
            }
        })
        if(lacking.length == 0){
            action();
        }
        else{
            lacking = lacking.map(i=>`'${i}'`);
            let error = `${lacking[0]} is a required parameter.`;
            if (lacking.length > 1){
                let last = lacking.pop();
                error = `${lacking.join(', ')} and ${last} are all required parameters.`;
            }
            res.status(404).json({
                msg: error
            });
        }
    },
    modelFind: (model, res, next)=>{
        model.find()
            .then(next)
            .catch(self.errorResponse(res));
    },
    modelSave: (model, res, next)=>{
        model.save()
            .then(next)
            .catch(self.errorResponse(res));
    }
};
