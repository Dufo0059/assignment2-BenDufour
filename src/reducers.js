import {SAVE_NEWTODO,ADD_TODOLIST,CHANGE_STATUS} from "./actions";

export default function todoApp(state=[],action){

  let newState = Object.assign({},state);
  switch(action.type){
    case SAVE_NEWTODO:{

      if(newState.addTodoValue==""){
        return state;
      }

      let newTodoItem = {};

      const lastId = newState.todoList[newState.todoList.length-1].id;
      newTodoItem.id = lastId+1;
      newTodoItem.key = lastId+1;
      newTodoItem.text = newState.addTodoValue;
      newTodoItem.status = 0;

      let newArray = [...newState.todoList, newTodoItem]
      newState.todoList=newArray;
      newState.addTodoValue="";
    }

    break;
    case ADD_TODOLIST:
      newState.addTodoValue = action.text;

    break;

    case CHANGE_STATUS:

     {
     let newerArray = newState.todoList.map((todo) => {
       if (todo.id == action.id) {
          return Object.assign({}, todo, {status: todo.status ? 0: 1});
        } else {
          return Object.assign({}, todo);
        }
     });
     newState.todoList=newerArray;
   }

    break;

    default:
    return state;
  }
  return newState;
}






    //    case ADD_TODOLIST:
    //        break;
    //    case CHANGE_STATUS:
    //        break;
    //    case SAVENEW_TODO:
    //        break;
    //    default:
    //        break;
    //    }
    //    return newState;
    //}