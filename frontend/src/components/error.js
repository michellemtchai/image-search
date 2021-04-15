import React from 'react';

class Error extends React.Component {
    render() {
        return this.props.search.error ? (
            <p className="error">{this.props.search.error}</p>
        ) : (
            ''
        );
    }
}

export default Error;
