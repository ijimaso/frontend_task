import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ListBgi from "./ListBgi";
import Undone from "./Undone";
import Done from "./Done";
import CreateForm from "./CreateForm";
import "./css/App.css";

export default class App extends Component {
  constructor() {
    super();
    const undoneTodos = [
      {
        id: 1,
        content: "1限",
        done: false
      },
      {
        id: 2,
        content: "2限",
        done: false
      },
    ];
    const doneTodos = [
      {
        id: 3,
        content: "2限",
        done: true
      }
    ]
    const undoneLength = undoneTodos.length;
    const doneLength = doneTodos.length;

    this.state = {
      undoneTodos: undoneTodos,
      undoneLength: undoneLength,
      doneTodos: doneTodos,
      doneLength: doneLength,
      createShow: false
    };
  }

  /**
   *タスク作成フォームを開く
   *
   * @memberof App
   */
  createOpen = () => {
    this.setState({ createShow: true });
  }

  /**
   *タスク表示フォームを閉じる
   *
   * @memberof App
   */
  createClose = () => {
    this.setState({ createShow: false });
  }

  /**
   *Idが1のタスクを作成する
   *
   * @memberof App
   */
  plusFirstUndoneTodo = () => {
    const content = document.getElementById("content").value;
    if (content === "") {
      alert("タスク内容を入力してください．")
    } else {
      const undoneTodos = this.state.undoneTodos.slice();

      undoneTodos.unshift({
        id: 1,
        content: content,
        done: false
      });
      const undoneLength = undoneTodos.length;

      this.setState({ undoneTodos: undoneTodos });
      this.setState({ undoneLength: undoneLength });
      this.createClose();
    }
  }

  /**
   *IDの最大値が「未完了」のタスクであるとき，次のIDのタスクを作成する
   *
   * @memberof App
   */
  plusMaxUndoneIdTodo = () => {
    const content = document.getElementById("content").value;
    if (content === "") {
      alert("タスク内容を入力してください．")
    } else {
      const undoneTodos = this.state.undoneTodos.slice();
      const undoneIds = undoneTodos.map(undoneTodo => undoneTodo.id);
      const maxUndoneId = Math.max(...undoneIds);

      undoneTodos.unshift({
        id: maxUndoneId + 1,
        content: content,
        done: false
      });
      const undoneLength = undoneTodos.length;

      this.setState({ undoneTodos: undoneTodos });
      this.setState({ undoneLength: undoneLength });
      this.createClose();
    }
  }

  /**
   *IDの最大値が「完了」のタスクであるとき，次のIDのタスクを作成する
   *
   * @memberof App
   */
  plusMaxDoneIdTodo = () => {
    const content = document.getElementById("content").value;
    if (content === "") {
      alert("タスク内容を入力してください．")
    } else {
    const undoneTodos = this.state.undoneTodos.slice();
    const doneTodos = this.state.doneTodos.slice();
    const doneIds = doneTodos.map(doneTodo => doneTodo.id);
    const maxDoneId = Math.max(...doneIds);

    undoneTodos.unshift({
      id: maxDoneId + 1,
      content: content,
      done: false
    });
    const undoneLength = undoneTodos.length;

    this.setState({ undoneTodos: undoneTodos });
    this.setState({ undoneLength: undoneLength });
    this.createClose();
    }
  }

  /**
   *未完了/完了のタスクの条件によって，実際にタスクを作成
   *
   * @memberof App
   * @param {Object} event イベント
   */
  createTodo = (event) => {
    event.preventDefault();

    const undoneTodos = this.state.undoneTodos.slice();
    const undoneLength = undoneTodos.length;
    const undoneIds = undoneTodos.map(undoneTodo => undoneTodo.id);
    const maxUndoneId = Math.max(...undoneIds);

    const doneTodos = this.state.doneTodos.slice();
    const doneLength = doneTodos.length;
    const doneIds = doneTodos.map(doneTodo => doneTodo.id);
    const maxDoneId = Math.max(...doneIds);

    if ((undoneLength !== 0 && doneLength !== 0) && (maxUndoneId > maxDoneId)) {
      this.plusMaxUndoneIdTodo();
    } else if ((undoneLength !== 0 && doneLength !== 0) && (maxUndoneId < maxDoneId)) {
      this.plusMaxDoneIdTodo();
    } else if (doneLength === 0 && undoneLength === 0) {
      this.plusFirstUndoneTodo();
    } else if (doneLength === 0) {
      this.plusMaxUndoneIdTodo();
    } else if (undoneLength === 0) {
      this.plusMaxDoneIdTodo();
    }
  }

  /**
   *完了/未完了を切り替える
   *
   * @memberof App
   * @param {Object} clickedTodo クリックされたタスク
   */
  switchDone = (clickedTodo) => {
    const undoneTodos = this.state.undoneTodos.slice();
    const doneTodos = this.state.doneTodos.slice();

    if (clickedTodo.done === false) {
      const clickedIndex = undoneTodos.findIndex((undoneTodo) => {
        return clickedTodo.id === undoneTodo.id;
      });

      const setTodo = undoneTodos[clickedIndex];
      setTodo.done = !(setTodo.done);

      doneTodos.unshift(setTodo);
      const doneLength = doneTodos.length;

      const leftUndoneTodos = undoneTodos.filter((undoneTodo) => {
        return clickedTodo.id !== undoneTodo.id;
      });
      const undoneLength = leftUndoneTodos.length;

      this.setState({ undoneTodos: leftUndoneTodos });
      this.setState({ undoneLength: undoneLength });
      this.setState({ doneTodos: doneTodos });
      this.setState({ doneLength: doneLength });
    } else {
      const clickedIndex = doneTodos.findIndex((doneTodo) => {
        return clickedTodo.id === doneTodo.id;
      });

      const setTodo = doneTodos[clickedIndex];
      setTodo.done = !(setTodo.done);

      undoneTodos.unshift(setTodo);
      const undoneLength = undoneTodos.length;

      const leftDoneTodos = doneTodos.filter((doneTodo) => {
        return clickedTodo.id !== doneTodo.id;
      });
      const doneLength = leftDoneTodos.length;

      this.setState({ undoneTodos: undoneTodos });
      this.setState({ undoneLength: undoneLength });
      this.setState({ doneTodos: leftDoneTodos });
      this.setState({ doneLength: doneLength });
    }
  }

  /**
   *タスクを削除する
   *
   * @memberof App
   * @param {Object} clickedTodo クリックされたタスク
   */
  deleteTodo = (clickedTodo) => {
    const undoneTodos = this.state.undoneTodos.slice();
    const doneTodos = this.state.doneTodos.slice();

    if (clickedTodo.done === false) {
      const leftUndoneTodos = undoneTodos.filter((undoneTodo) => {
        return clickedTodo.id !== undoneTodo.id;
      })
      const undoneLength = leftUndoneTodos.length;

      this.setState({ undoneTodos: leftUndoneTodos });
      this.setState({ undoneLength: undoneLength });
    } else {
      const leftDoneTodos = doneTodos.filter((doneTodo) => {
        return clickedTodo.id !== doneTodo.id;
      })
      const doneLength = leftDoneTodos.length;

      this.setState({ doneTodos: leftDoneTodos });
      this.setState({ doneLength: doneLength });
    }
  }

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
      { name: "night", url:"http://imgcc.naver.jp/kaze/mission/USER/20131024/30/385770/129/1920x1080xb207116b68e633b49d5098.jpg"}]

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
      <div className="App">
        <h1 id="todotitle">タスク管理アプリ</h1>
        <ListBgi changeBgi={this.changeBgi}/>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Undone
              undoneTodos={this.state.undoneTodos}
              undoneLength={this.state.undoneLength}
              createOpen={this.createOpen}
              switchDone={this.switchDone}
              deleteTodo={this.deleteTodo}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Done
              doneTodos={this.state.doneTodos}
              doneLength={this.state.doneLength}
              switchDone={this.switchDone}
              deleteTodo={this.deleteTodo}
            />
          </Grid>
        </Grid>
        <CreateForm
          createShow={this.state.createShow}
          createOpen={this.createOpen}
          createClose={this.createClose}
          createTodo={this.createTodo}
        />
      </div>
    );
  }
}
