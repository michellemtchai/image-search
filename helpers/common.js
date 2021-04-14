module.exports = common = {
    renderError: (res, message) => {
        res.status(404).json({ msg: message });
    },
    errorResponse: (res) => {
        return (err) => common.renderError(res, err.message);
    },
    requiredParams: (params, res, required, action) => {
        let lacking = [];
        required.forEach((i) => {
            if (!params.hasOwnProperty(i)) {
                lacking.push(i);
            }
        });
        if (lacking.length == 0) {
            action();
        } else {
            lacking = lacking.map((i) => `'${i}'`);
            let error = `${lacking[0]} is a required parameter.`;
            if (lacking.length > 1) {
                let last = lacking.pop();
                error = `${lacking.join(
                    ', '
                )} and ${last} are all required parameters.`;
            }
            common.renderError(res, error);
        }
    },
};
