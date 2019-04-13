import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Fab from "@material-ui/core/Fab";
import CheckCircle from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import "./css/Todo.css";

const Todo = (props) => {
    return (
        <div className="todo">
            <Card>
                <CardContent>
                    <h5>{props.id}</h5>
                    <p>{props.content}</p>
                    <Fab color="secondary" aria-label="Check" size="small" onClick={(event) => {
                        event.preventDefault();
                        props.switchDone(props);
                    }}>
                        <CheckCircle />
                    </Fab>
                    <Fab aria-label="Delete" size="small" onClick={(event) => {
                        event.preventDefault();
                        props.deleteTodo(props);
                    }}>
                        <DeleteIcon />
                    </Fab>
                </CardContent>
            </Card>
        </div>
    );
}

export default Todo;