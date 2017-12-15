import React, {Component} from "react";
import Header from "./Header";
import Todolist from "./Todolist";
import AddNewTodo from "./AddNewTodo";
import {connect} from "react-redux";
import * as todoAction from "../actions";



export class Main extends Component {
    render() {
        return (
            <div>
                <Header />   
           <Todolist/>
                <AddNewTodo addTodoChanged={this.props.addTodoChanged} addTodoValue={this.props.addTodoValue} saveNewTodo={this.props.saveNewTodo} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
        addTodoValue: state.addTodoValue,
        todoList: state.todoList

    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        addTodoChanged: (e)=> dispatch(todoAction.addTodolist(e.target.value))
       // saveNewTodo: (e)=> dispatch(todoAction.saveNewTodo())
//        addTodoChanged: (e)=> dispatch(todoAction.addTodolist(e.target.value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

//
//           <Todolist todos={this.props.todoList} onTodoClick={this.props.toggleStatus}></Todolist>
//                <AddNewTodo addTodoChanged={this.props.addTodoChanged} addTodoValue={this.props.addTodoValue} saveNewTodo={this.props.saveNewTodo} />
//class Main extends Component {
//    render() {
//        return (
//            <div>
//                <Title />
//                <Btn onClick={this.props.increaseCounter} label={this.props.increaseLabel}></Btn>
//                <Counter/>
//                <Btn onClick={this.props.decreaseCounter} label={this.props.decreaseLabel}></Btn>
//            </div>
//        )
//    }
//}
//
//

//
//export default connect(mapStateToProps, mapDispatchToProps)(Main); 
