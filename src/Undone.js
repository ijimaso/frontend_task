import React from 'react';
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Todolist from "./Todolist";
import "./css/Undone.css";

const Undone = (props) => {
  const {undoneTodos,undoneLength,switchDone,deleteTodo,createOpen} = props
  return (
    <div className="undone">
      <Card>
        <div id="undonetitle">
          <h1>未完了: {undoneLength}</h1>
          <Tooltip title="新規作成">
            <Fab
              color="primary"
              aria-label="Add"
              size="small"
              onClick={(event) => {
                event.preventDefault();
                createOpen();
              }}
              id="addicon"
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        </div>
        <Todolist
          todos={undoneTodos}
          switchDone={switchDone}
          deleteTodo={deleteTodo}
        />
      </Card>
    </div>
  );
}

export default Undone;
