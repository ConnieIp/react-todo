import React, { Component } from 'react'
import { connect } from "react-redux";
import Todos from "../components/Todos.js"


const mapStateToProps = state => ({
  todos: state.todos,
  showActiveOnly:state.showActiveOnly
});

const mapDispatchToProps = dispatch =>({
  getAllTodo:()=>{
    fetch("http://localhost:8080/api/todos", {
            method: 'GET', 
            mode: 'cors',
        }).then(res => res.json())
        .then(res => {
          console.log(res)  
          dispatch({
                type:"GETALLTODO",
                payload: res._embedded.todos.map(todoItem=>({
                  id:todoItem.id,
                  content:todoItem.content,
                  status:todoItem.status}))
              })
        })
  },
  getActiveTodo:()=>{
    fetch("http://localhost:8080/api/todos/search/statusOfTodos?status=active", {
            method: 'GET', 
            mode: 'cors',
        }).then(res => res.json())
        .then(res => {
          console.log(res)  
          dispatch({
                type:"GETACTIVETODO",
                payload: res._embedded.todos.map(todoItem=>({
                  id:todoItem.id,
                  content:todoItem.content,
                  status:todoItem.status}))
              })
        })
  },
  changeToActive:(id,content)=>{
    fetch("http://localhost:8080/api/todos/"+id, {
  mode: 'cors',
  method: 'PUT', 
  body: JSON.stringify({
    "content" : content,
    "status" : "active"
  }),
  headers: new Headers({ 'Content-Type': 'application/json'})
})
   .then(res=>res.json())
   .then((res)=>{
    console.log(res) 
    return dispatch({
    type: "CHANGETOACTIVE",
    payload: id
  })})
},
  changeToCompleted:(id,content)=>
  fetch("http://localhost:8080/api/todos/"+id, {
  mode: 'cors',
  method: 'PUT', 
  body: JSON.stringify({
    "content" : content,
    "status" : "completed"
  }),
  headers: new Headers({ 'Content-Type': 'application/json'})
})
   .then(res=>res.json())
   .then((res)=>{
   console.log(res)
   return dispatch({
    type: "CHANGETOCOMPLETED",
    payload: res.id
  })}),
  changeCheckBox:()=>dispatch({
    type:"CHANGECHECKBOX"
  })
})

export default connect(mapStateToProps,mapDispatchToProps)(Todos);
