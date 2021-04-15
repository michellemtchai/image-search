import React from 'react';

class SearchResult extends React.Component {
    render() {
        return (
            <li className="entry">
                <a href={this.props.page} target="_blank">
                    <img src={this.props.image} />
                    <section>
                        <h2
                            dangerouslySetInnerHTML={{
                                __html: this.props.title,
                            }}
                        ></h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: this.props.description,
                            }}
                        ></p>
                    </section>
                </a>
            </li>
        );
    }
}

export default SearchResult;
