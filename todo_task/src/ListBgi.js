import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const ListBgi = (props) => {
    return (
        <List component="nav">
                <ListItem button onClick={(event) => { props.changeBgi(event) }} id="default">
                    デフォルト
                </ListItem>
                <ListItem button onClick={(event) => { props.changeBgi(event) }} id="valley">
                    渓谷
                </ListItem>
                <ListItem button onClick={(event) => { props.changeBgi(event) }} id="cave">
                    洞窟
                </ListItem>
                <ListItem button onClick={(event) => { props.changeBgi(event) }} id="night">
                    夜景
                </ListItem>
            </List>
    )
}

export default ListBgi;