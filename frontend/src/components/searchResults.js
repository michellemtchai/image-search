import React from 'react';
import SearchResult from './searchResult';

class SearchResults extends React.Component {
	render() {
        let data = this.props.search.results;
        if(Object.keys(data).length > 0){
            return (
                <div>
                    <p>
                        About {data.totalResults} results ({data.searchTime} seconds)
                    </p>
                    {data.results.map((item, i)=>
                        <SearchResult key={'result-'+i} {...item}/>
                    )}
                </div>
            );
        }
        else{
            return '';
        }

  	}
}

export default SearchResults;
