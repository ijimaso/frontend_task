import React, { Component } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import "./css/NavBgi.css";

export default class NavBgi extends Component {
    
    /**
    *クリックしたら背景画像が切り替わる
    *
    * @memberof App
    * @param {Object} event イベント
    */
    changeBgi = (event) => {
        event.preventDefault();

        const clickedId = event.target.id;
        const imageDic =
            [{ name: "default", url: "http://imgcc.naver.jp/kaze/mission/USER/20131024/30/385770/190/1920x1080xa215189de5ef3506289c6c.jpg" },
            { name: "valley", url: "http://imgcc.naver.jp/kaze/mission/USER/20131023/30/385770/17/1920x1080x70ce8461c60a8e85c08186.jpg" },
            { name: "cave", url: "http://imgcc.naver.jp/kaze/mission/USER/20131024/30/385770/166/1920x1080x35ad5a010053257c9fca1c.jpg" },
            { name: "night", url: "http://imgcc.naver.jp/kaze/mission/USER/20131024/30/385770/129/1920x1080xb207116b68e633b49d5098.jpg" }
            ];

        if (clickedId === "default") {
            document.body.style.backgroundImage = `url(${imageDic[0].url})`;
        } else if (clickedId === "valley") {
            document.body.style.backgroundImage = `url(${imageDic[1].url})`;
        } else if (clickedId === "cave") {
            document.body.style.backgroundImage = `url(${imageDic[2].url})`;
        } else if (clickedId === "night") {
            document.body.style.backgroundImage = `url(${imageDic[3].url})`;
        }
    }
    
    render() {
        return (
            <List className="navbgi">
                <ListItem button onClick={(event) => { this.changeBgi(event) }} id="default">
                    Default
                </ListItem>
                <ListItem button onClick={(event) => { this.changeBgi(event) }} id="valley">
                    Valley
                </ListItem>
                <ListItem button onClick={(event) => { this.changeBgi(event) }} id="cave">
                    Cave
                </ListItem>
                <ListItem button onClick={(event) => { this.changeBgi(event) }} id="night">
                    Night
                </ListItem>
            </List>
        )
    }
}