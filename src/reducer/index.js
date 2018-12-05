const initialState = {
    todos:[],
    showActiveOnly:false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case "GETALLTODO":
    return { ...state, todos:[...payload]}
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
    case "GETACTIVETODO":
      return {...state,todos:[...payload]}
    case "CHANGECHECKBOX":
      return {...state,showActiveOnly:!state.showActiveOnly}
  default:
    return state
  }
}
