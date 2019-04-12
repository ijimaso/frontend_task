import React, { Component } from 'react';
import "./css/Undone.css";
import Todolist from "./Todolist";
// import FormDialog from "./FormDialog";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
// import Button from "@material-ui/core/Button";

export default class Undone extends Component{
    render() {
        return (
          <div className="undone">
            <h1>未完了:{this.props.undoneLength}</h1>
            <Fab
              color="primary"
              aria-label="Add"
              size="small"
              onClick={this.props.handleOpen}
            >
              <AddIcon />
            </Fab>
            <Todolist
              todos={this.props.undoneTodos}
              switchDone={this.props.switchDone}
              deleteTodo={this.props.deleteTodo}/>
          </div>
        );
    }
}