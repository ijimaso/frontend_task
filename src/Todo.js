import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import Done from "@material-ui/icons/Done";
import Clear from "@material-ui/icons/Clear";
import DeleteIcon from "@material-ui/icons/Delete";
import "./css/Todo.css";

const Todo = (props) => {
    const {content,done,switchDone,deleteTodo} = props;
    const todoIdName = done ? "done" : "undone";
    const todoSwitchTooltip = done ? "元に戻す" : "完了";
    return (
        <div className="todo">
            <Card>
                <CardContent>
                    <p id={todoIdName}>{content}</p>
                    {done ?
                        <Tooltip title={todoSwitchTooltip}>
                            <Fab color="secondary" aria-label="Clear" size="small" id="icons"
                                onClick={(event) => {
                                    event.preventDefault();
                                    switchDone(props);
                                }}>
                                <Clear />
                            </Fab>
                        </Tooltip> :
                        <Tooltip title={todoSwitchTooltip}>
                            <Fab color="secondary" aria-label="Check" size="small" id="icons"
                                onClick={(event) => {
                                    event.preventDefault();
                                    switchDone(props);
                                }}>
                                <Done />
                            </Fab>
                        </Tooltip>
                    }
                    <Tooltip title="削除">
                        <Fab aria-label="Delete" size="small"
                            onClick={(event) => {
                                event.preventDefault();
                                deleteTodo(props);
                            }}>
                            <DeleteIcon />
                        </Fab>
                    </Tooltip>
                </CardContent>
            </Card>
        </div>
    );
}

export default Todo;