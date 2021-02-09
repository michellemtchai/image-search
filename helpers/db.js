let common = require('./common');

module.exports = db = {
    modelFind: (model, res, next, options = {})=>{
        let query = model.find();
        if(options.hasOwnProperty('sort')){
            query = query.sort(options.sort);
        }
        if(options.hasOwnProperty('limit')){
            query = query.limit(options.limit);
        }
        if(options.hasOwnProperty('select')){
            query = query.select(options.select);
        }
        query
            .then(next)
            .catch(common.errorResponse(res));
    },
    modelSave: (model, res, next)=>{
        model.save()
            .then(next)
            .catch(common.errorResponse(res));
    },
    renderAll: (model, res, options = {})=>{
        db.modelFind(model, res, i=>res.json(i), options);
    }
};
