import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import logo from './logo.svg';
import './App.css';

import BookList from './components/BookList';
import AddBook from './components/AddBook';

// server side uri
let uri;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  uri = 'http://localhost:4000/graphql'
} 
else {
  uri = 'https://graphql-readinglist-server.herokuapp.com/graphql'
}

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {


  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <h1>Ninja's Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
