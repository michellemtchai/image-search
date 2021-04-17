import React from 'react';
import SearchResult from './searchResult';
import Pagination from './pagination';
import loader from '../assets/loader.gif';

class SearchResults extends React.Component {
    render() {
        let data = this.props.search.results;
        if (Object.keys(data).length > 0) {
            if (this.props.search.fetching) {
                loader =
                    process.env.APP_ENV === 'production'
                        ? process.env.APP_PUBLIC_URL + loader
                        : loader;
                return (
                    <p className="loader">
                        <img src={loader} />
                    </p>
                );
            } else {
                let pages = Math.ceil(data.totalResults / 10);
                pages = pages > 19 ? 19 : pages;
                return (
                    <ul className="results">
                        <li>
                            About {data.totalResults} results (
                            {data.searchTime} seconds)
                        </li>
                        <Pagination
                            {...this.props}
                            pages={pages}
                        />
                        {data.results.map((item, i) => (
                            <SearchResult
                                key={'result-' + i}
                                {...item}
                            />
                        ))}
                        <Pagination
                            {...this.props}
                            pages={pages}
                        />
                    </ul>
                );
            }
        } else {
            return '';
        }
    }
}

export default SearchResults;
