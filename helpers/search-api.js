let common = require('./common');
const fetch = require('node-fetch');
const queryString = require('query-string');

module.exports = searchAPI = {
    imageSearch: (req, res) => {
        let handleHistory = (data) =>
            searchAPI.saveHistory(req, res, data);
        db.modelFind(History, res, handleHistory, {
            sort: {
                date: -1,
            },
            limit: 1,
        });
    },
    saveHistory: (req, res, data) => {
        // let query = req.params.query;
        // if(data.length==0 || data[0].query != query){
        //     let model = new History({
        //         query: query
        //     })
        //     db.modelSave(model, res, ()=>searchAPI.handleSearch(req, res));
        // }
        // else{
        //     searchAPI.handleSearch(req, res);
        // }
        console.log('save history');
    },
    handleSearch: (req, res) => {
        let page = searchAPI.page(req);
        let url = searchAPI.searchURL(req, page);
        fetch(url)
            .then((response) => response.json())
            .catch(common.errorResponse)
            .then((data) => {
                let [error, response] = searchAPI.formatData(
                    data,
                    page
                );
                if (error) {
                    common.renderError(res, response);
                } else {
                    res.json(response);
                }
            });
    },
    page: (req) => {
        return req.query.hasOwnProperty('page')
            ? searchAPI.parsePage(req)
            : 0;
    },
    searchURL: (req, page) => {
        let limit = 10;
        let params = queryString.stringify({
            key: process.env.API_KEY,
            cx: process.env.CX,
            q: req.params.query,
            searchType: 'image',
            start: page * limit + 1,
        });
        return `https://www.googleapis.com/customsearch/v1?${params}`;
    },
    parsePage: (req) => {
        let page = req.query.page.match(/^[0-9]+$/);
        return page ? parseInt(page) : 0;
    },
    formatData: (data, page) => {
        if (data.hasOwnProperty('error')) {
            return [true, data.error.message];
        } else {
            let res = {
                page: page == 0 ? 1 : page,
                searchTime:
                    data.searchInformation.formattedSearchTime,
                totalResults: parseInt(
                    data.searchInformation.totalResults
                ),
                results: data.items.map((i) => {
                    return {
                        image: i.link,
                        description: i.htmlSnippet,
                        page: i.image.contextLink,
                        title: i.htmlTitle,
                    };
                }),
            };
            return [false, res];
        }
    },
};
