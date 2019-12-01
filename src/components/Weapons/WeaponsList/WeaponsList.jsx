import React, { Component } from 'react';
import allWeapons from '../../../gamedata/Weapons/AllWeapons.js';
import weaponTypes from '../../../gamedata/Weapons/weaponTypes.js';

import Weapon from './Weapon/Weapon.jsx';

class WeaponsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weaponTypes,
			weapons: allWeapons.filter(weapon => weapon.type === this.props.key),
		};
	}

	render() {
		const weapons = this.state.weapons.map(weapon => (
			<Weapon key={weapon.name} weapon={weapon} />
		));
		return (
			<div id="weaponsList">
				{weapons}
			</div>
		);
	}
}