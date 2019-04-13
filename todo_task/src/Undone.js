import React from 'react';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Todolist from "./Todolist";
import "./css/Undone.css";

const Undone = (props) => {
  return (
    <div className="undone">
      <h1>未完了:{props.undoneLength}</h1>
      <Fab
        color="primary"
        aria-label="Add"
        size="small"
        onClick={props.createOpen}
      >
        <AddIcon />
      </Fab>
      <Todolist
        todos={props.undoneTodos}
        switchDone={props.switchDone}
        deleteTodo={props.deleteTodo}
      />
    </div>
  );
}

export default Undone;
