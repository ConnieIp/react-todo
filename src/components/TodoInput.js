import React, { Component } from 'react'
import { connect } from "react-redux";
class TodoInput extends Component {
  onAdded = () => {
    const {input} = this.refs
    this.props.addNewTodo(input.value)
    input.value = ''
  }
  render() {
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.onAdded}>add</button>
      </div>
    )
  }
}

const mapDispatchToProps=dispatch=>({
  addNewTodo:newTodo=>{
    dispatch({
    type:"ADDTODO",
    payload:newTodo
  })
}
})

export default connect(null, mapDispatchToProps)(TodoInput);