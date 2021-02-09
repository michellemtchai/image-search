import React from 'react';

class SearchResult extends React.Component {
    constructor(props){
        super(props);
        this.openInTab = this.openInTab.bind(this);
    }
    openInTab(url){
        Object.assign(
            document.createElement('a'),
            {
                target: '_blank',
                href: url
            }
        ).click();
    }
	render() {
        return (
            <div className='entry'
                onClick={()=>this.openInTab(this.props.page)}>
                <img src={this.props.image}/>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        );
  	}
}

export default SearchResult;
