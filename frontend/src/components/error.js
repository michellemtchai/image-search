import React from 'react';

class Error extends React.Component {
	render() {
		return this.props.error?
			<p className='error'>
                {this.props.error}
			</p>:
            '';
  	}
}

export default Error;
