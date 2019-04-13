import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./css/FormDialog.css";

export default class EditForm extends Component {
    render() {
        return (
            <div className="formdialog">
                <Dialog open={this.props.editShow} onClose={this.props.editClose}>
                    <h1>編集</h1>
                    <TextField
                        multiline
                        rows="3"
                        placeholder="変更内容を入力してください．"
                        margin="normal"
                        id="editContent"
                    />
                    <Button variant="contained" color="primary" onClick={(event) => {
                        console.log(this.props.todo);
                        event.preventDefault();
                        this.props.editTodo(this.props.todo);
                    }} size="small">
                        OK!
          </Button>
                </Dialog>
            </div>
        );
    }
}
