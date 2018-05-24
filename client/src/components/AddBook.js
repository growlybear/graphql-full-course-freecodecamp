import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import { getAuthorsQuery } from '../queries/queries'

class AddBook extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      genre: '',
      authorId: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  displayAuthors () {
    let { data } = this.props
    return data.loading
      ? <option>Loading authors...</option>
      : data.authors.map(author => (
          <option key={author.id} value={author.id}>{ author.name }</option>
        ))
  }
  handleSubmit (ev) {
    ev.preventDefault()
    console.log(this.state)
  }
  render () {
    return (
      <form className="add-book" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={ev => this.setState({ name: ev.target.value })} />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={ev => this.setState({ genre: ev.target.value })} />
        </div>

        <div className="field">
          <label>Author:</label>
          <select onChange={ev => this.setState({ authorId: ev.target.value })}>
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
