import React, { Component } from "react";

export default class Simon extends Component {

	constructor() {
		super();
		this.state = {
			activeColor: null,
			index: null,
		}
	}

	getIndex = () => {
		this.setState({ index: this.state.index + 1 })
	}

	getActiveColor = (index) => {
		if (!index) {
			this.setState({ activeColor: this.props.colors[0] });
			this.getIndex();
			setTimeout(() => {
				this.getActiveColor(this.state.index);
			}, 2000);
		} else if (index === 0) {
			this.setState({ activeColor: this.props.colors[1] });
			this.getIndex()
			setTimeout(() => {
				this.getActiveColor(this.state.index);
			}, 2000);
		} else if (index === 1) {
			this.setState({ activeColor: this.props.colors[2] });
			this.getIndex();
			setTimeout(() => {
				this.getActiveColor();
			}, 2000);
		} else if (index === 2) {
			this.setState({ activeColor: this.props.colors[3] });
			this.getIndex();
			setTimeout(() => {
				this.getActiveColor();
			}, 2000);
		} else if (index === 3) {
			this.setState({ activeColor: this.props.colors[4] });
			this.getIndex();
			setTimeout(() => {
				this.getActiveColor();
			}, 2000);
		}
	};

	componentDidMount() {
		this.getActiveColor(this.state.index);
	};

	render() {
		return (
			<h2>
				{this.state.index}
				{this.state.activeColor}
			</h2>
		);
	}
}
