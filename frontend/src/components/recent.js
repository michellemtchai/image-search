import React from 'react';
import { setRecentSearches } from '../shared/helper';

class Recent extends React.Component {
    componentDidMount() {
        setRecentSearches(this.props);
    }
    render() {
        return (
            <div>
                <h1>Recent Search History</h1>
                {this.props.search.recent.map((item, i) => (
                    <div className="entry" key={'recent-' + i}>
                        <p>
                            <b>Query:</b> {item.query}
                            <br />
                            <b>Page:</b> {item.page}
                        </p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Recent;
