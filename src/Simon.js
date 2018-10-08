import React, { Component } from "react";
import Colors from "./Colors";

export default class Simon extends Component {

	constructor() {
		super();
		this.state = {
			activeColor: null,
			index: null,
		}
	}

	incrementIndex = () => {
		this.setState({ index: this.state.index + 1 })
	}

	setActiveColor = (i) => {
		this.setState({ activeColor: this.props.colors[i] });
	}

	waitAndRecall = () => {
		setTimeout(() => {
			this.getActiveColor(this.state.index);
		}, 2000);
	}

	nextColor = (index) => {
		this.incrementIndex();
		this.setActiveColor(index);
		this.waitAndRecall();
	}

	getActiveColor = (index) => {
		if (index === null) {
			this.setState({ activeColor: this.props.colors[0], index: 0 });
			this.waitAndRecall();
		} else if (index === 0) {
			this.nextColor(0);
		} else if (index === 1) {
			this.nextColor(1);
		} else if (index === 2) {
			this.nextColor(2);
		} else if (index === 3) {
			this.nextColor(3);
		} else if (index === 4) {
			this.nextColor(4);
		} else if (index === 5) {
			this.incrementIndex();
		}
	}

	componentDidMount() {
		if (this.props.colors) {
			this.getActiveColor(this.state.index);
		}
	};

	render() {
		return (
			<h2>
				<Colors
					colors={this.props.colors}
					activeColor={this.state.activeColor}
					index={this.state.index}
					checkColors={this.props.checkColors} />
			</h2>
		);
	}
}
