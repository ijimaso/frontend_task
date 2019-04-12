import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Fab from "@material-ui/core/Fab";
import CheckCircle from "@material-ui/icons/CheckCircle";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
// import red from "@material-ui/core/colors/red";
// import green from "@material-ui/core/colors/green";
import "./css/Todo.css"

export default class Todo extends Component {
  // constructor(props) {
  //   super(props);
  // }
    render() {
    return (
      <div className="todo">
        <Card>
          <CardContent>
            {/* <h4>{this.props.id}</h4> */}
            <p>{this.props.content}</p>
            <Fab color="secondary" aria-label="Check" size="small" onClick={(event) => {
              event.preventDefault();
              this.props.switchDone(this.props);
            }}>
              <CheckCircle />
            </Fab>
            <Fab color="secondary" aria-label="Edit" size="small">
              <EditIcon />
            </Fab>
            <Fab aria-label="Delete" size="small" onClick={(event) => {
              event.preventDefault();
              this.props.deleteTodo(this.props);
             }}>
              <DeleteIcon />
            </Fab>
          </CardContent>
        </Card>
      </div>
    );
  }
}
