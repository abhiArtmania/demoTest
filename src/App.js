import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchComponent from './SearchComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchComponent/>
      </div>
    );
  }
}

export default App;
