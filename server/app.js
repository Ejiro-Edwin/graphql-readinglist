require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
const morgan = require('morgan');


const port = process.env.PORT || 4000;
const app = express();


app.use(morgan('dev'));
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.once('open', () => {
  console.log('Connected to mlab!')
});
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.use((req, res) => {
  res.send('error');
});


app.listen(port, () => {
  console.log('App listening on port ' + port);
});
