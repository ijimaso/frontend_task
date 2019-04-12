import React, { Component } from 'react';
import Todolist from "./Todolist";
import "./css/Done.css";

export default class Done extends Component {
    render() {
        return (
            <div className="done">
                <h1>完了:{this.props.doneLength}</h1>
                <Todolist
                    todos={this.props.doneTodos}
                    switchDone={this.props.switchDone}
                    deleteTodo={this.props.deleteTodo}/>
            </div>
        )
    }
}