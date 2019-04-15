import React from 'react';
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Todolist from "./Todolist";
import "./css/Undone.css";

const Undone = (props) => {
  return (
    <div className="undone">
      <Card>
        <div id="undonetitle">
          <h1>未完了: {props.undoneLength}</h1>
          <Tooltip title="新規作成">
            <Fab
              color="primary"
              aria-label="Add"
              size="small"
              onClick={(event) => {
                event.preventDefault();
                props.createOpen();
              }}
              id="addicon"
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        </div>
        <Todolist
          todos={props.undoneTodos}
          switchDone={props.switchDone}
          deleteTodo={props.deleteTodo}
        />
      </Card>
    </div>
  );
}

export default Undone;
