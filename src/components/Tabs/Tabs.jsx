import React, { Component } from 'react';
import './tabs.styl';

class Tabs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: this.props.activeTab || this.props.tabs[0].name,
		};
	}

	setActiveTab(name) {
		this.setState({ activeTab: this.props.tabs.find(tab => tab.name === name) });
	}

	render() {
		const headers = this.props.tabs.map(tab => (
			<a key={tab.name} 
				onClick={() => this.setActiveTab(tab.name)} 
				className={this.state.activeTab === tab.name ? 'active tabHeader' : 'tabHeader'}>
				{tab.name}
			</a>
		));
		const tabContent = this.props.tabs.map(tab => tab.component);
		return (
			<div id="tabs">
				<section id="tabHeaders">
					{headers}
				</section>
				<section id="tabContent">
					{tabContent}
				</section>
			</div>
		);
	}
}

export default Tabs;