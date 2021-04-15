import React from 'react';

class SearchResult extends React.Component {
    openImage = (event) => {
        event.preventDefault();
        window.open(this.props.image, '_blank').focus();
    };
    render() {
        return (
            <li className="entry">
                <a href={this.props.page} target="_blank">
                    <img
                        src={this.props.image}
                        onClick={this.openImage}
                        title="Open image in new tab"
                    />
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
