import React, { Component } from 'react'
import TodoInput from '../containers/TodoInputContainer'
import Todos from '../containers/TodosContainer'
import { connect } from "react-redux";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoInput/>
        <Todos/>
      </div>
    )
  }
}
