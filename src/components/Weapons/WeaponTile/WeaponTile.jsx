import React, { Component } from 'react';
import './weaponTile.styl';

class WeaponTile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const className = this.props.weapon.exotic ? 'exotic weaponTile' : 'weaponTile';
		return (
			<article className={className}>
				{this.props.weapon.name}
			</article>
		);
	}
}
export default WeaponTile;