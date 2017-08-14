import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const parseString = require('react-native-xml2js').parseString; // Xml parser

class SearchBar extends Component {
  handleSearchClick = () => {
    const name = this._name.value;
    console.log(name);

    // Make call to MusicBrainz search api
    fetch('http://musicbrainz.org/ws/2/artist/?query=artist:fred%20AND%20type:group%20AND%20country:US')
      .then(response => response.text()) // Convert response to text
      .then((response) => {
        parseString(response, function (err, result) { // Convert text to xml string
          console.log(response);
          
        });
      }).catch((err) => {
        console.log('fetch', err); 
      })
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
