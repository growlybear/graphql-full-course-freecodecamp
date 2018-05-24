import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import { getBooksQuery } from '../queries/queries'

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
