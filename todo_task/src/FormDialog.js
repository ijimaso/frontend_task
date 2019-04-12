import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./css/FormDialog.css";

export default class FormDialog extends Component {
  render() {
    return (
      <div className="formdialog">
        <Dialog open={this.props.show} onClose={this.props.handleClose}>
          <h1>作成するタスクを入力してください．</h1>
          <TextField 
            multiline
            rows="3"
            placeholder="内容を入力してください．"
            margin="normal"
            id="content"
          />
          <Button variant="contained" color="primary" onClick={(event) => this.props.createTodo(event)} size="small">
            Create
          </Button>
        </Dialog>
      </div>
    );
  }
}
