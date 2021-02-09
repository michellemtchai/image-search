module.exports = self = {
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