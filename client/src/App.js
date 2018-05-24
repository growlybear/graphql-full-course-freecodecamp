import React, { Component } from 'react';

import BookList from './components/BookList'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App goes here</h1>
        <BookList />
      </div>
    );
  }
}

export default App;
