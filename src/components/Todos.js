import React, { Component } from 'react'
import { connect } from "react-redux";

export default class Todos extends Component {
  componentWillMount(){
    this.props.getAllTodo();
  }
  clickCheckBox=()=>{
    this.props.showActiveOnly?this.props.getAllTodo():this.props.getActiveTodo()
    this.props.changeCheckBox()
  }
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
        <input type='checkbox' onChange={this.clickCheckBox}/><span>Active Todo</span>
      </div>
    )
  }
}
