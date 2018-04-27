import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

class BookList extends Component {

  displayBooks() {
    var data = this.props.data;
    console.log(this.props);
    if(data.loading) {
      return (<div>Loading ...</div>)
    }

    let html = data.books.map(book => <li key={ book.id }>{book.name}</li>);

    return (
      <ul>
        { html }
      </ul>
    );
  }

  render() {
    return (
      <div className="BookList">
        {this.displayBooks()}
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
