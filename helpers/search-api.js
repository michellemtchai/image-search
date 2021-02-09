let common = require('./common');
const fetch = require('node-fetch');
const queryString = require('query-string');

module.exports = searchAPI = {
    imageSearch: (req, res)=>{
        let limit = 10;
        let page = req.query.hasOwnProperty('page')?
            searchAPI.parsePage(req) : 0;
        params = queryString.stringify({
            key: process.env.API_KEY,
            cx: process.env.CX,
            q: req.params.query,
            searchType: 'image',
            start: (page * limit) + 1,
        });
        let url = `https://www.googleapis.com/customsearch/v1?${params}`;
        fetch(url)
            .then(response => response.json())
            .catch(common.errorResponse)
            .then(data => {
                res.json(searchAPI.formatData(data, page))
            });
    },
    parsePage: (req)=>{
        let page = req.query.page.match(/^[0-9]+$/);
        return page ? parseInt(page) : 0;
    },
    formatData: (data, page)=>{
        return data.hasOwnProperty('error')?
            {
                msg: data.error.message
            }:
            {
                page: page == 0 ? 1 : page,
                searchTime: data.searchInformation.formattedSearchTime,
                totalResults: data.searchInformation.totalResults,
                results: data.items.map(i=>{
                    return {
                        image: i.link,
                        description: i.htmlSnippet,
                        page: i.image.contextLink,
                        title: i.htmlTitle,
                    }
                })
            };
    },
};
