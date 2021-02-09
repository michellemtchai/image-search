import React from 'react';

class ToggleButton extends React.Component {
	render() {
		return (
			<button className='button'
				onClick={this.props.toggleButton}>
				{
					this.props.search.search?
					'See Recent Searches':
					'Go Back to ImageSearch'
				}
			</button>
		);
  	}
}

export default ToggleButton;
