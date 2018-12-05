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
            this.props.changeToCompleted(todo.id,todo.content)
          }else{
            this.props.changeToActive(todo.id,todo.content)
          }}} 
        key={i}
        style={{textDecoration:todo.status=="completed"?'line-through':'none'}}
        >{todo.content}
        </li>
        }
        )}
      </div>
    )
  }
}
