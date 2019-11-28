import React, { Component } from 'react';
import NavigationLink from './NavigationLink/NavigationLink.jsx';
import './navigation.styl';

class Navigation extends Component {

	render() {
		return(
			<nav>
				<NavigationLink />
            </nav>
		);
	}
}

export default Navigation;