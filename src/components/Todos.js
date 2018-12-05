import React, { Component } from 'react'
import { connect } from "react-redux";

export default class Todos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, i) => <li key={i}>{todo}</li>)}
      </div>
    )
  }
}
