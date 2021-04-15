import React from 'react';
import SearchResult from './searchResult';
import Pagination from './pagination';
import loader from '../assets/loader.gif';

class SearchResults extends React.Component {
    state = {
        page: 1,
    };
    updatePage = (page) => {
        this.setState({
            page: page,
        });
    };
    render() {
        let data = this.props.search.results;
        if (Object.keys(data).length > 0) {
            if (this.props.search.fetching) {
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
                            page={this.state.page}
                            updatePage={this.updatePage}
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
                            page={this.state.page}
                            updatePage={this.updatePage}
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
