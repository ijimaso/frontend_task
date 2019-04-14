import React, { Component } from "react";
import Undone from "./Undone";
import Done from "./Done";
import CreateForm from "./CreateForm";
import "./css/App.css";

export default class App extends Component {
  constructor() {
    super();
    const undoneTodos = [
      // {
      //   id: 1,
      //   content: "1限",
      //   done: false
      // },
      // {
      //   id: 2,
      //   content: "2限",
      //   done: false
      // },
    ];
    const doneTodos = [
      // {
      // id: 3,
      // content: "2限",
      // done: true
      // }
    ]
    const undoneLength = undoneTodos.length;
    const doneLength = doneTodos.length;

    this.state = {
      undoneTodos: undoneTodos,
      undoneLength: undoneLength,
      doneTodos: doneTodos,
      doneLength: doneLength,
      createShow: false,
    };
  }

  createOpen() {
    this.setState({ createShow: true });
  }

  createClose() {
    this.setState({ createShow: false });
  }

  plusFirstUndoneTodo() {
    const content = document.getElementById("content").value;
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

  plusMaxUndoneIdTodo() {
    const content = document.getElementById("content").value;
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

  plusMaxDoneIdTodo() {
    const content = document.getElementById("content").value;
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

  createTodo(event) {
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

  switchDone(clickedTodo) {
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

  deleteTodo(clickedTodo) {
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
    return (
      <div className="App">
        <h1>Todo Task</h1>
        <Undone
          undoneTodos={this.state.undoneTodos}
          undoneLength={this.state.undoneLength}
          createOpen={this.createOpen.bind(this)}
          switchDone={this.switchDone.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
        />
        <Done
          doneTodos={this.state.doneTodos}
          doneLength={this.state.doneLength}
          switchDone={this.switchDone.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
        />
        <CreateForm
          createShow={this.state.createShow}
          createOpen={this.createOpen.bind(this)}
          createClose={this.createClose.bind(this)}
          createTodo={this.createTodo.bind(this)}
        />
      </div>
    );
  }
}
