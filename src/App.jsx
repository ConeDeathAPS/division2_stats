import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.jsx';
import Home from './components/Home/Home.jsx';
import Error from './components/Error/Error.jsx';
import Weapons from './components/Weapons/Weapons.jsx';
import Armor from './components/Armor/Armor.jsx';
import SkillAttachments from './components/SkillAttachments/SkillAttachments.jsx';
import GearSystemMods from './components/GearSystemMods/GearSystemMods.jsx';

class App extends Component {

	constructor(props) {
		super(props);
		this.pages = ['Home', 'Weapons', 'Armor', 'Skill Attachments', 'Gear System Mods'];
		this.state = {
			activePage: this.pages[1]
		};
		this.setPage = this.setPage.bind(this);
		// this.getPageComponent = this.getPageComponent.bind(this);
	}

	setPage(page) {
		this.setState({ activePage: page });
	}

	getPageComponent() {
		switch(this.state.activePage) {
			case 'Home':
				return <Home />;
			case 'Weapons':
				return <Weapons />;
			case 'Armor':
				return <Armor />;
			case 'Skill Attachments':
				return <SkillAttachments />;
			case 'Gear System Mods':
				return <GearSystemMods />;
			default:
				return <Error />;
		}
	}

	render() {
		const activePage = this.getPageComponent();
		return(
			<div className="app">
				<Navigation pages={this.pages} activePage={this.state.activePage} onPageChange={this.setPage} />
				<main>
					{activePage}
				</main>
			</div>
		);
	}
}

export default App;