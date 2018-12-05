import React, { Component } from 'react'
import { connect } from "react-redux";

class Todos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, i) => <li key={i}>{todo}</li>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Todos);