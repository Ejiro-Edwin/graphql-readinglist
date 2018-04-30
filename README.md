![Icon](graphql-logo.jpg "GraphQL Reading List")

# GraphQL Reading List

Proof of concept reading list application built with React, Node + Express, and GraphQL as taught by the Net Ninja.

[GraphQL Tutorial by the Net Ninja](https://www.youtube.com/watch?v=Y0lDGjwRYKw&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f)

## Getting Started

```
git clone git@github.com:marciandmnd/graphql-readinglist.git
cd graphql-readinglist
npm install
```

GraphQL Reading List requires a MongoDB URI to persist data:
```
cd server
touch .env
echo "MONGODB_URI=mongodb://username:password@ds111111.mlab.com:15214/graphql-readinglist" >> .env
```

To start the application, from the project root run `npm run dev`

### Prerequisites

* [Node.js](https://nodejs.org/en/)

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [GraphQL](https://graphql.org/) - A query language for your API
* [MongoDB](https://www.mongodb.com/) - Free and open-source cross-platform document-oriented database
* [Node.js](https://nodejs.org/en/) - Server side JavaScript Runtime
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* The Net Ninja
