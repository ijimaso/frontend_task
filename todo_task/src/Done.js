import React from 'react';
import Todolist from "./Todolist";
import "./css/Done.css";

const Done = (props) => {
    return (
        <div className="done">
            <h1>完了:{props.doneLength}</h1>
            <Todolist
                todos={props.doneTodos}
                switchDone={props.switchDone}
                deleteTodo={props.deleteTodo}
            />
        </div>
    );
}

export default Done;
