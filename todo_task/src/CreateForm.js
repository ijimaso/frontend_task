import React from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const CreateForm = (props) => {
    return (
      <div>
        <Dialog open={props.createShow} onClose={props.createClose}>
          <h1>作成するタスクを入力してください．</h1>
          <TextField
            multiline
            rows="3"
            placeholder="タスク内容"
            margin="dense"
            id="content"
          />
          <Button variant="contained" color="primary" size="small"
            onClick={(event) => {
              event.preventDefault();
              props.createTodo(event);
            }}
          >
          OK!!
          </Button>
        </Dialog>
      </div>
    );
}

export default CreateForm;
