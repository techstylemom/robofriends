import React, { Component } from 'react';

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.state({hasError: true})
	}

	render() {
		const { hasError } = this.state;

		return hasError ? 
		<h1>Sorry, there's an error!</h1> :
		this.props.children
	}
}

export default ErrorBoundry;