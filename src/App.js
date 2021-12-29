import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    users.push({
      id: '1dji',
      name: 'anuar',
      email: 'anuarshaidenov@gmail.com',
    });
    this.setState({ monsters: users });
  }

  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder={'Search for monsters'}
          handleChange={this.handleChange}
        />
        <div className="container">
          <CardList monsters={filteredMonsters} />
        </div>
      </div>
    );
  }
}

export default App;
