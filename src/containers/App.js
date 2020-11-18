import React, {Component, Fragment} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component {
	constructor() {
		super()
		// contains the properties that can be changed
		this.state = {
			robots: [],
			searchfield: '',
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}));
	}
	// this function listens for events on the searchfield
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}
	render() {

		const {robots, searchfield} = this.state

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		
		// if robots lengt is === 0 return loading else, return components
		return !robots.length ? 
		<h1>Loading</h1> :
			(
				<>	
					<div className="tc">
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
					</div>
				</>
			);
	}
}

export default App;