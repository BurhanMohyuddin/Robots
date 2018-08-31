import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll.js';

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
        const filterRobo = this.state.Robot.filter(Robot => {
            return Robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.Robot.length === 0) {
            return <h1>LOADING.....!</h1>
        }
        else {
            return (
                < div className='tc ' >
                    <h1 className='f2' >ROBOFRIENDS</h1>
                    <SearchBox searchchange={this.onSearch} />
                    <Scroll>
                        <CardList Robot={filterRobo} />
                    </Scroll> 
                </div>
            );
        }
    }
}
export default App;