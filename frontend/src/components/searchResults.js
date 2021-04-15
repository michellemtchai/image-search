import React from 'react';
import SearchResult from './searchResult';

class SearchResults extends React.Component {
    render() {
        let data = this.props.search.results;
        if (Object.keys(data).length > 0) {
            return (
                <ul className="results">
                    <li>
                        About {data.totalResults} results (
                        {data.searchTime} seconds)
                    </li>
                    {data.results.map((item, i) => (
                        <SearchResult
                            key={'result-' + i}
                            {...item}
                        />
                    ))}
                </ul>
            );
        } else {
            return '';
        }
    }
}

export default SearchResults;
