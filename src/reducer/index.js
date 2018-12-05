const initialState = {
    todos:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADDTODO":
    return { ...state, todos:state.todos.concat(payload)}
  case "CHANGETOACTIVE":
    return {...state, todos:state.todos.map(todoItem=>{
      if(todoItem.id===payload){
        return {...todoItem, status:"active"}
      }else{
        return todoItem
      }
    })}
  case "CHANGETOCOMPLETED":
    return {...state, todos:state.todos.map(todoItem=>{
      if(todoItem.id===payload){
        return {...todoItem, status:"completed"}
      }else{
        return todoItem
      }
    })}
  default:
    return state
  }
}
