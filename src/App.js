import React, { Component } from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';
import { Robot } from './Robot';

class App extends Component {
    constructor() {
        super();
        this.state = {
            Robot: Robot,
            searchfield: ' ',
        }
    }
    onSearch = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filterRobo = this.state.Robot.filter(Robot => {
            return Robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            < div className='tc ' >
                <h1>ROBOFRIENDS</h1>
                <SearchBox searchchange={this.onSearch} />
                <CardList Robot={filterRobo} />
            </div>
        );
    }
}
export default App;