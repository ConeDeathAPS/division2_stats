import React, { Component } from 'react';
import './navigationLink.styl';

class NavigationLink extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const page = this.props.name;
		const className = this.props.isActive ? 'active navbarLink' : 'navbarLink';
		return (
			<a href="#" className={className} onClick={() => this.props.click(page)}>
				{page}
			</a>
		);
	}
}

export default NavigationLink;