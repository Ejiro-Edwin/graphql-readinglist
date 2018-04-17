import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
  {
    books{
      id
      name
      author {
        name
      }
    }
  }
`;

class BookList extends Component {
  render() {
    console.log(this.props.data.books);
    return (
      <div className="BookList">
        <ul id="book-list">
          <li>Book name</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
