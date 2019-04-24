import React from 'react';
import Card from "@material-ui/core/Card";
import Todolist from "./Todolist";
import "./css/Done.css";

const Done = (props) => {
    const {doneTodos,doneLength,switchDone,deleteTodo} = props
    return (
        <div className="done">
            <Card>
                <h1>完了: {doneLength}</h1>
                <Todolist
                    todos={doneTodos}
                    switchDone={switchDone}
                    deleteTodo={deleteTodo}
                />
            </Card>
        </div>
    );
}

export default Done;
