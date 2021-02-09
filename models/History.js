module.exports = (app) =>{
    return app.shared.createModel('history', {
        query: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    })
};
