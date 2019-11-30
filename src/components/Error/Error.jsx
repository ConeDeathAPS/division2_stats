import React, { Component } from 'react';
import './error.styl';

class Error extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="error">
				<h2>Aww shit...</h2>
				<p>This page happens when we can't find a thing that you were looking for.</p>
				<p>Maybe try to find something that exists?</p>
			</div>
		);
	}
}

export default Error;