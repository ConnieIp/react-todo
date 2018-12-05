import React, { Component } from 'react'
import { connect } from "react-redux";
import Todos from "../components/Todos.js"


const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Todos);
