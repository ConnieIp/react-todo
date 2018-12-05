const initialState = {
    todos:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADDTODO":
    return { ...state, todos:state.todos.concat(payload)}

  default:
    return state
  }
}
