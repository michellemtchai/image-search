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
            <table className='entry'
                onClick={()=>this.openInTab(this.props.page)}>
                <tbody>
                <tr>
                    <td>
                        <img src={this.props.image}/>
                    </td>
                    <td>
                        <h2 dangerouslySetInnerHTML={{__html: this.props.title}}></h2>
                        <p dangerouslySetInnerHTML={{__html: this.props.description}}></p>
                    </td>
                </tr>
                </tbody>
            </table>
        );
  	}
}

export default SearchResult;
