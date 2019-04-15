import React, { Component } from "react";
import List from "@material-ui/core/List";
import Todo from "./Todo";
import "./css/Todolist.css";

export default class Todolist extends Component {
    arrangeTodo = () => {
        const todos = this.props.todos.map(todo => {
            return (
                <Todo
                key={todo.id} {...todo}
                switchDone={this.props.switchDone}
                    deleteTodo={this.props.deleteTodo} />
            );
        });
        return todos;
    }

    render() {
        return (
            <div className="todolist">
                <List style={{ maxHeight: 350, overflow: "auto" }}>
                    {this.arrangeTodo()}
                </List>
            </div>
        );
    }
}
