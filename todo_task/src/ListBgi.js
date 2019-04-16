import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import "./css/ListBgi.css";

const ListBgi = (props) => {
    return (
        <List className="listbgi">
                <ListItem button onClick={(event) => { props.changeBgi(event) }} id="default">
                    Default
                </ListItem>
                <ListItem button onClick={(event) => { props.changeBgi(event) }} id="valley">
                    Valley
                </ListItem>
                <ListItem button onClick={(event) => { props.changeBgi(event) }} id="cave">
                    Cave
                </ListItem>
                <ListItem button onClick={(event) => { props.changeBgi(event) }} id="night">
                    Night
                </ListItem>
        </List>
    )
}

export default ListBgi;