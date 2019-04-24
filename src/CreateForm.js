import React from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const CreateForm = (props) => {
  const {createShow,createClose,createTodo} = props
    return (
      <div>
        <Dialog open={createShow} onClose={createClose}>
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
              createTodo(event);
            }}
          >
          OK!!
          </Button>
        </Dialog>
      </div>
    );
}

export default CreateForm;
