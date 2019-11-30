import React, { Component } from 'react';
import './weapons.styl';
import weaponTypes from '../../gamedata/Weapons/WeaponTypes.js';
import AllWeapons from '../../gamedata/Weapons/AllWeapons.js';
import WeaponTile from './WeaponTile/WeaponTile.jsx';
class Weapons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weaponTypes,
			allWeapons: AllWeapons,
		};
	}

	render() {
		const types = this.state.weaponTypes.map(type => (
			<button key={type}>
				{type}
			</button>
		));
		const weapons = this.state.allWeapons.map(weapon => (
			<WeaponTile key={weapon.name} weapon={weapon} />
		));
		return (
			<div id="weapons">
				<h2>Weapons</h2>
				<section id="types">
					{types}
				</section>
				<section id="weaponsGrid">
					{weapons}
				</section>
			</div>
			
		);
	}
}

export default Weapons;