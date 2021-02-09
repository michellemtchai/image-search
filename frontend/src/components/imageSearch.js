import React from 'react';
import Error from './error';
import ToggleButton from './toggleButton';
import Search from './search';
import Recent from './recent';
import { fetchData } from '../shared/helper';

class ImageSearch extends React.Component {
	render() {
        let search = this.props.search.search;
		return (
			<div className='content'>
                <Error {...this.props}/>
                <ToggleButton {...this.props}/>
				{
                    search ?
                    <Search {...this.props}/>:
                    <Recent {...this.props}/>
                }
			</div>
		);
  	}
}

export default ImageSearch;
