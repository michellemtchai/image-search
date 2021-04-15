import React from 'react';
import { searchTerm } from '../shared/helper';

class SearchInput extends React.Component {
    updateInput = (event) => {
        this.props.setInput(event.target.value);
    };
    detectKey = (event) => {
        if (event.keyCode === 13) {
            searchTerm(this.prop);
        }
    };
    render() {
        return (
            <input
                type="text"
                className="searchbar"
                value={this.props.search.input}
                onChange={(event) => this.updateInput(event)}
                onKeyDown={this.detectKey}
                placeholder="Find an Image"
            />
        );
    }
}

export default SearchInput;
