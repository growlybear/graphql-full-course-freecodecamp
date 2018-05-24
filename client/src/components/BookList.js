import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const getBooksQuery = gql`
  {
    books {
      name,
      genre,
      id
    }
  }
`

class BookList extends Component {
  displayBooks () {
    let { data } = this.props
    return data.loading
      ? <li>Fetching book data...</li>
      : data.books.map(book => <li key={book.id}>{ book.name }</li>)
  }
  render () {
    return (
      <ul>
        { this.displayBooks() }
      </ul>
    )
  }
}

export default graphql(getBooksQuery)(BookList)
