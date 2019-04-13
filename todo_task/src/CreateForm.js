import React from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./css/FormDialog.css";

const CreateForm = (props) => {
    return (
      <div className="formdialog">
        <Dialog open={props.createShow} onClose={props.createClose}>
          <h1>作成するタスクを入力してください．</h1>
          <TextField 
            multiline
            rows="3"
            placeholder="内容を入力してください．"
            margin="normal"
            id="content"
          />
          <Button variant="contained" color="primary" onClick={(event) => props.createTodo(event)} size="small">
            OK!!
          </Button>
        </Dialog>
      </div>
    );
}

export default CreateForm;
