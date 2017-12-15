export const ADD_TODOLIST = "ADD_TODOLIST"
export const CHANGE_STATUS = "CHANGE_STATUS"
export const SAVE_NEWTODO = "SAVE_NEWTODO"

export const addTodolist = (text)=>{
    return {type:ADD_TODOLIST,text}
}
export const changeStatus = (id)=>{
    return {type:CHANGE_STATUS,id}
}
export const saveNewTodo = ()=>{
    return {type:SAVE_NEWTODO}
}