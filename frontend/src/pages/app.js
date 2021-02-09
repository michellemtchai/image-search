import React from 'react';
import ImageSearch from '../components/imageSearch';

class App extends React.Component {
	render() {
		return <ImageSearch {...this.props}/>;
  	}
}

export default App;
