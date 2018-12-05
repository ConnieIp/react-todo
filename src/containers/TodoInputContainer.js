import React, { Component } from 'react'
import { connect } from "react-redux";
import TodoInput from "../components/TodoInput.js"

const mapDispatchToProps=dispatch=>({
    addNewTodo:newTodo=>{
      dispatch({
      type:"ADDTODO",
      payload:newTodo
    })
  }
  })

  

export default connect(null, mapDispatchToProps)(TodoInput);