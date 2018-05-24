require('dotenv').config()

const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')

const schema = require('./schema/schema')

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds133920.mlab.com:33920/graphql-books-freecodecamp`
)
mongoose.connection.once('open', () => {
  console.log('Connected to mLab database...')
})

const app = express()
const PORT = 4000

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
