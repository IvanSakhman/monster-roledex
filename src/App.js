import React, { Component } from "react";
import CardList from "./components/CardList";
import Search from "./components/Search";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchMonster = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search
          handleChange={this.onSearchMonster}
          placeholder="search monster..."
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
