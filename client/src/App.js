import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import logo from './logo.svg';
import './App.css';

import BookList from './components/BookList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Reading List</h1>
          </header>
          <h2>Built with React/Node/Express/GraphQL</h2>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
