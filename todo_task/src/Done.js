import React from 'react';
import Card from "@material-ui/core/Card";
import Todolist from "./Todolist";
import "./css/Done.css";

const Done = (props) => {
    return (
        <div className="done">
            <Card>
                <h1>完了: {props.doneLength}</h1>
                <Todolist
                    todos={props.doneTodos}
                    switchDone={props.switchDone}
                    deleteTodo={props.deleteTodo}
                />
            </Card>
        </div>
    );
}

export default Done;
