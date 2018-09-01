import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';


class App extends Component {
    constructor() {
        super();
        this.state = {
            Robot: [],
            searchfield: ' ',
        }
    }

    componentDidMount() { 
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ Robot: users }));
    }
    onSearch = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const { Robot, searchfield } = this.state;
        const filterRobo = Robot.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !Robot.length ?
            <h1>LOADING.....!</h1> :
            (
            < div className='tc ' >
                    <h1 className='f2' >ROBOFRIENDS</h1>
                    <SearchBox searchchange={this.onSearch} />
                    <Scroll>
                        <ErrorBoundary>
                        <CardList Robot={filterRobo} />
                        </ErrorBoundary>   
                    </Scroll>
                </div>
            )

    }
}
export default App;