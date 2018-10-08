import React, { Component } from "react";
import "./Colors.css"

export default class Colors extends Component {
	constructor() {
		super();
		this.state = {
			clicked: []
		}
	}

	renderColorPattern = () => {
		return (
			<div>
				<h1> Watch and Learn </h1>
				<div className={`block blue ${this.isActive("blue")}`} id="blue" onClick={this.getUserColors} />
				<div className={`block red ${this.isActive("red")}`} id="red" onClick={this.getUserColors} />
				<div className={`block yellow ${this.isActive("yellow")}`} id="yellow" onClick={this.getUserColors} />
				<div className={`block green ${this.isActive("green")}`} id="green" onClick={this.getUserColors} />
			</div>
		);
	}

	renderUserOptions = () => {
		return (
			<div>
				<h1> Your turn </h1>
				<div className="block blue" id="blue" onClick={this.getUserColors} />
				<div className="block red" id="red" onClick={this.getUserColors} />
				<div className="block yellow" id="yellow" onClick={this.getUserColors} />
				<div className="block green" id="green" onClick={this.getUserColors} />
			</div>
		);
	}

	showPatternOrOptions = () => {
		return this.props.index === 6 ?
			this.renderUserOptions() :
			this.renderColorPattern();
	}

	isActive = (color) => {
		return color === this.props.activeColor ? "lighten" : null;
	}

	getUserColors = (event) => {
		const clicked = this.state.clicked;
		this.setState({ clicked: [...clicked, event.target.id] })
	}

	componentDidUpdate() {
		this.props.checkColors(this.state.clicked)
	}

	render() {
		return (
			<div>
				{this.showPatternOrOptions()}
			</div>
		)
	}
}