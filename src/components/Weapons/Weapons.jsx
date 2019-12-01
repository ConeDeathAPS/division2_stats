import React, { Component } from 'react';
import './weapons.styl';
import weaponTypes from '../../gamedata/Weapons/WeaponTypes.js';
import AllWeapons from '../../gamedata/Weapons/AllWeapons.js';
import WeaponsList from './WeaponsList/WeaponsList.jsx';
import Weapon from './WeaponsList/Weapon/Weapon.jsx';
import Tabs from '../Tabs/tabs.jsx';

class Weapons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			weaponTypes,
			allWeapons: AllWeapons,
		};
	}

	getTabs() {
		return this.state.weaponTypes.map(type => ({ name: type, component: <WeaponsList key={type} />  }));
	}

	render() {
		const types = this.state.weaponTypes.map(type => (
			<button key={type}>
				{type}
			</button>
		));
		const weapons = this.state.allWeapons.map(weapon => (
			<Weapon key={weapon.name} weapon={weapon} />
		));
		return (
			<div id="weapons">
				<h2>Weapons</h2>
				<Tabs tabs={this.getTabs()} />
			</div>
			
		);
	}
}

export default Weapons;