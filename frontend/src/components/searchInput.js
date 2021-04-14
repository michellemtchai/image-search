import React from 'react';
import { fetchData } from '../shared/helper';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.updateInput = this.updateInput.bind(this);
        this.detectKey = this.detectKey.bind(this);
        this.searchTerm = this.searchTerm.bind(this);
    }
    updateInput(event) {
        this.props.setInput(event.target.value);
    }
    detectKey(event) {
        if (event.keyCode === 13) {
            this.searchTerm(this.props);
        }
    }
    searchTerm(props) {
        if (props.search.input.trim().length > 0) {
            let url = `http://localhost:3000/query/${encodeURIComponent(
                props.search.input
            )}?page=${props.search.page}`;
            fetchData(
                url,
                this.props.setSearch,
                this.props.setError
            );
        }
    }
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
