import React, { Component } from "react";
import List from "@material-ui/core/List";
import Todo from "./Todo";
import "./css/Todolist.css";

export default class Todolist extends Component {
    mappingTodo = () => {
        const {todos,switchDone,deleteTodo} = this.props
        const mappedtodos = todos.map(todo => {
            return (
                <Todo
                key={todo.id} {...todo}
                switchDone={switchDone}
                deleteTodo={deleteTodo} />
            );
        });
        return mappedtodos;
    }

    render() {
        return (
            <div className="todolist">
                <List style={{ maxHeight: 380, overflow: "auto" }}>
                    {this.mappingTodo()}
                </List>
            </div>
        );
    }
}
