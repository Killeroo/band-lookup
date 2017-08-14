import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class SearchBar extends Component {
  handleSearchClick = () => {
    const name = this._name.value;
    console.log(name);
  }

  render() {
    return (
      <div className="col-lg-6">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search for..." ref={input => this._name = input} />
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="button" onClick={this.handleSearchClick}>Search</button>
          </span>
        </div>
      </div>
    )
  }
}

// Top level react component
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
