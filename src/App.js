import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function SearchBar() {
  return (
    <div className="col-lg-6">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search for..." />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="button">Search</button>
        </span>
      </div>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Band Lookup</h2>
          <p>Get info on any band...</p>
        </div>
        <p className="App-intro">

        </p>
        <SearchBar />
      </div>
    );
  }
}

export default App;
