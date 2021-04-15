import React from 'react';
import SearchResult from './searchResult';
import Pagination from './pagination';

class SearchResults extends React.Component {
    state = {
        page: this.props.page,
    };
    updatePage = (page) => {
        this.setState({
            page: page,
        });
    };
    render() {
        let data = this.props.search.results;
        if (Object.keys(data).length > 0) {
            let pages = data.totalResults / 10;
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
                        page={data.page}
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
                        page={data.page}
                        updatePage={this.updatePage}
                    />
                </ul>
            );
        } else {
            return '';
        }
    }
}

export default SearchResults;
