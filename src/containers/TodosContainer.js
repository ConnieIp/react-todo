import React, { Component } from 'react'
import { connect } from "react-redux";
import Todos from "../components/Todos.js"


const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>({
  changeToActive:(id)=>dispatch({
      type: "CHANGETOACTIVE",
      payload: id
  }),
  changeToCompleted:(id)=>dispatch({
    type: "CHANGETOCOMPLETED",
    payload: id
})
})

export default connect(mapStateToProps,mapDispatchToProps)(Todos);
