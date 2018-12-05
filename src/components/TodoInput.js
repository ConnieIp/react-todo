import React, { Component } from 'react'
import { connect } from "react-redux";
class TodoInput extends Component {
  addNewTodo = () => {
    const {input} = this.refs
    this.props.dispatch({
      type:"ADDTODO",
      payload:input.value
    })
    input.value = ''
  }
  render() {
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.addNewTodo}>add</button>
      </div>
    )
  }
}


export default connect()(TodoInput);