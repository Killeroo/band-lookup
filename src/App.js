import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

const parseString = require('react-native-xml2js').parseString; // Xml converter
var xmldoc = require('xmldoc'); // Xml doc parser

class SearchBar extends Component {
  handleSearchClick = () => {
    const name = this._name.value;

    // Query MusicBrainz search api
    fetch('http://musicbrainz.org/ws/2/artist/?query=artist:' + name)
      // Convert response to text
      .then(response => response.text()) 
      .then((response) => {
        // Convert text to xml string
        parseString(response, function (err, result) { 

          // Process our response
          var xmlResponse = new xmldoc.XmlDocument(response); 
          var artists = xmlResponse.childNamed('artist-list').children;
          var len = artists.length;
          var results = [];
          var listItems;

          console.log(artists);

          // Loop through found artists
          for (var x = 0; x < len; x++) {
            var artist = artists[x].childNamed('name');
            var name = artist.val;
            results.push(name);
          }

          // Map results to html list
          listItems = results.map((result) =>
            <li>{result}</li>
          );

          // Render list in ReactDOM
          ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('result_list'))

        });
      }).catch((err) => {
        console.log('fetch', err); 
    });
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
