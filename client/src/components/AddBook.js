import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import { getAuthorsQuery } from '../queries/queries'

class AddBook extends Component {
  displayAuthors () {
    let { data } = this.props
    return data.loading
      ? <option>Loading authors...</option>
      : data.authors.map(author => (
          <option key={author.id} value={author.id}>{ author.name }</option>
        ))
  }
  render () {
    return (
      <form className="add-book">
        <div className="field">
          <label>Book name:</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Author:</label>
          <select>
            <option>Select author</option>
            { this.displayAuthors() }
          </select>
        </div>

        <button type="submit">Add</button>
      </form>
    )
  }
}

export default graphql(getAuthorsQuery)(AddBook)
