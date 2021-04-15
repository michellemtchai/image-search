import React from 'react';
import { fetchData } from '../shared/helper';

class Recent extends React.Component {
    componentDidMount() {
        let url = 'http://localhost:3000/recent';
        fetchData(
            url,
            this.props.setRecent,
            this.props.setError
        );
    }
    render() {
        return (
            <div>
                <h1>Recent Search History</h1>
                {this.props.search.recent.map((item, i) => (
                    <div className="entry" key={'recent-' + i}>
                        <p>
                            <b>Term:</b> {item}
                        </p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Recent;
