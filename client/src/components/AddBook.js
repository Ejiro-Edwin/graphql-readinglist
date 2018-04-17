import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../queries/queries';

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      genre: '',
      author: ''
    };
  }
  displayAuthors() {
    const data = this.props.data;
    if(data.loading) {
      return <option disabled>Loading authors...</option>;
    }
    else {
      return data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>);
    }
  }
  
  submitForm(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="AddBook">
        <form id="add-book" onSubmit={ this.submitForm.bind(this) }>
          <div className="field">
            <label htmlFor="name">Book name:</label>
            <input onChange={ (e) => this.setState({name: e.target.value}) } name="name" type="text" />
          </div>
          <div className="field">
            <label htmlFor="genre">Genre</label>
            <input onChange={ (e) => this.setState({genre: e.target.value}) } name="genre" type="text"/>
          </div>
          <div className="field">
            <label htmlFor="author">Author</label>
            <select name="author" id="">
              <option value="">Select Author</option>
              { this.displayAuthors() }
            </select>
          </div>
          <input type="submit" value="+" />
        </form>
      </div>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
