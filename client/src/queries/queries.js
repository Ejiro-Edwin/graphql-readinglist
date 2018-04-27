import { gql } from 'apollo-boost';


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

const getAuthorsQuery = gql`
  {
    authors{
      id
      name
    }
  }
`;

const addBookMutation = gql`
  mutation {
    addBook(name: "", genre: "", author: ""){
      name
      id
    }
  }
`
export { getAuthorsQuery, getBooksQuery, addBookMutation };