let common = require('./common');
const fetch = require('node-fetch');
const queryString = require('query-string');

module.exports = searchAPI = {
    imageSearch: (req, res)=>{
        let page = searchAPI.page(req);
        let url = searchAPI.searchURL(req, page);
        fetch(url)
            .then(response => response.json())
            .catch(common.errorResponse)
            .then(data => {
                let [error, response] = searchAPI.formatData(data,page);
                if(error){
                    common.renderError(res, response);
                }
                else {
                    res.json(response);
                }
            });
    },
    page: (req)=>{
        return req.query.hasOwnProperty('page')?
            searchAPI.parsePage(req) : 0;
    },
    searchURL: (req, page)=>{
        let limit = 10;
        let params = queryString.stringify({
            key: process.env.API_KEY,
            cx: process.env.CX,
            q: req.params.query,
            searchType: 'image',
            start: (page * limit) + 1,
        });
        return `https://www.googleapis.com/customsearch/v1?${params}`;
    },
    parsePage: (req)=>{
        let page = req.query.page.match(/^[0-9]+$/);
        return page ? parseInt(page) : 0;
    },
    formatData: (data, page)=>{
        if(data.hasOwnProperty('error')){
            return [true, data.error.message];
        }
        else{
            let res = {
                page: page == 0 ? 1 : page,
                searchTime: data.searchInformation.formattedSearchTime,
                totalResults: parseInt(data.searchInformation.totalResults),
                results: data.items.map(i=>{
                    return {
                        image: i.link,
                        description: i.htmlSnippet,
                        page: i.image.contextLink,
                        title: i.htmlTitle,
                    }
                })
            };
            res['pages'] = Math.ceil(res.totalResults / 10);
            return [false, res];
        }
    },
};
