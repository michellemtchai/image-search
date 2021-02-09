let common = require('./common');

module.exports = db = {
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
        db.modelFind(model, res, i=>res.json(i));
    }
};
