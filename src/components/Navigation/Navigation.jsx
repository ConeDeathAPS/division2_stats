import React, { Component } from 'react';
import NavigationLink from './NavigationLink/NavigationLink.jsx';
import './navigation.styl';

class Navigation extends Component {

	constructor(props) {
		super(props);
		this.onPageChange = this.onPageChange.bind(this);
	}

	onPageChange(targetPage) {
		this.props.onPageChange(targetPage);
	}

	render() {
		const allPageLinks = this.props.pages.map(page => (
			<NavigationLink
				key={page}
				name={page}
				click={this.onPageChange}
				isActive={this.props.activePage === page} />
		));
		return(
			<nav>
				{allPageLinks}
            </nav>
		);
	}
}

export default Navigation;