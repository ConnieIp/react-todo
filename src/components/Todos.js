import React, { Component } from 'react'
import { connect } from "react-redux";

export default class Todos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, i) => <li 
        // onClick="" 
        key={i}>{todo.content}
        </li>)}
      </div>
    )
  }
}
