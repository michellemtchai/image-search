import React from 'react';
import SearchInput from './searchInput';
import SearchResults from './searchResults';
import { fetchData } from '../shared/helper';

class Search extends React.Component {
	render() {
		return (
			<div>
                <h1>Image Search</h1>
				<SearchInput {...this.props}/>
                <SearchResults {...this.props}/>
			</div>
		);
  	}
}

export default Search;
