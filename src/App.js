import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import NavBgi from "./NavBgi";
import Undone from "./Undone";
import Done from "./Done";
import CreateForm from "./CreateForm";
import "./css/App.css";

export default class App extends Component {
  constructor() {
    super();
    const undoneTodos = [];
    const doneTodos = [];
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
      alert("タスク内容を入力してください．");
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
      alert("タスク内容を入力してください．");
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
      alert("タスク内容を入力してください．");
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

    if (maxUndoneId > maxDoneId) {
      this.plusMaxUndoneIdTodo();
    } else if (maxUndoneId < maxDoneId) {
      this.plusMaxDoneIdTodo();
    } else if (doneLength === 0 && undoneLength === 0) {
      this.plusFirstUndoneTodo();
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

  render() {
    const {
      undoneTodos,
      undoneLength,
      doneTodos,
      doneLength,
      createShow
    } = this.state
    return (
      <div className="App">
        <NavBgi />
        <Grid container>
          <Grid item md={6} xs={12}>
            <Undone
              undoneTodos={undoneTodos}
              undoneLength={undoneLength}
              createOpen={this.createOpen}
              switchDone={this.switchDone}
              deleteTodo={this.deleteTodo}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Done
              doneTodos={doneTodos}
              doneLength={doneLength}
              switchDone={this.switchDone}
              deleteTodo={this.deleteTodo}
            />
          </Grid>
        </Grid>
        <CreateForm
          createShow={createShow}
          createOpen={this.createOpen}
          createClose={this.createClose}
          createTodo={this.createTodo}
        />
      </div>
    );
  }
}
