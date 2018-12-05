import React, { Component } from 'react'
import { connect } from "react-redux";

export default class Todos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, i) => {
          return <li 
        onClick={()=>{
          if(todo.status=="active"){
            this.props.changeToCompleted(todo.id)
          }else{
            this.props.changeToActive(todo.id)
          }}} 
        key={i}
        style={todo.status=="completed"?{textDecoration:'line-through'}:{}}
        >{todo.content}
        </li>
        }
        )}
      </div>
    )
  }
}
