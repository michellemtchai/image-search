import React from 'react';

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.openInTab = this.openInTab.bind(this);
    }
    openInTab(url) {
        Object.assign(document.createElement('a'), {
            target: '_blank',
            href: url,
        }).click();
    }
    render() {
        return (
            <li
                className="entry"
                onClick={() => this.openInTab(this.props.page)}
            >
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
            </li>
        );
    }
}

export default SearchResult;
