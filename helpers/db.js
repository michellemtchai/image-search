let common = require('./common');

module.exports = self = {
    modelFind: (model, res, next)=>{
        model.find()
            .then(next)
            .catch(common.errorResponse(res));
    },
    modelSave: (model, res, next)=>{
        model.save()
            .then(next)
            .catch(common.errorResponse(res));
    },
    renderAll: (model, res)=>{
        self.modelFind(model, res, i=>res.json(i));
    }
};
