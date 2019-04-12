import React, { Component } from "react";
import "./css/App.css";
import Undone from "./Undone";
import Done from "./Done";
import FormDialog from "./FormDialog";

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
      // {
      //   id: 3,
      //   content: "3限",
      //   done: false
      // },
      // {
      //   id: 4,
      //   content: "4限",
      //   done: false
      // }
    ];
    const doneTodos = []

    const undoneLength = undoneTodos.length;
    const doneLength = doneTodos.length;
    // const modalMessage = "";

    this.state = {
      undoneTodos: undoneTodos,
      undoneLength: undoneLength,
      doneTodos: doneTodos,
      doneLength: doneLength,
      show: false
      // modalMessage:modalMessage
    };
  }

  handleOpen() {
    this.setState({ show: true });
    // console.log(show);

  }

  handleClose() {
    this.setState({ show: false });
  }

  createTodo(event) {
    event.preventDefault();

    const content = document.getElementById("content").value;
    const undoneTodos = this.state.undoneTodos.slice();
    const lastUndoneTodo = undoneTodos.slice(-1)[0];

    if (lastUndoneTodo) {
      console.log("lastUndoneTodoあります！");
      
      undoneTodos.push({
        id: lastUndoneTodo.id + 1,
        content: content,
        done: false
      });
      console.log(undoneTodos);
      
      const undoneLength = undoneTodos.length;
      this.setState({ undoneTodos: undoneTodos });
      this.setState({ undoneLength: undoneLength });
      this.handleClose();
    } else {
      console.log("lastUndoneTodoないです！");
      undoneTodos.push({
        id: 1,
        content: content,
        done: false
      }
      );
      console.log(undoneTodos);

      this.setState({ undoneTodos: undoneTodos });
      this.setState({ undoneLength: 1 });
      this.handleClose();
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
          handleOpen={this.handleOpen.bind(this)}
          switchDone={this.switchDone.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
        />
        <Done
          doneTodos={this.state.doneTodos}
          doneLength={this.state.doneLength}
          switchDone={this.switchDone.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
        />
        <FormDialog
          show={this.state.show}
          handleOpen={this.handleOpen.bind(this)}
          handleClose={this.handleClose.bind(this)}
          createTodo={this.createTodo.bind(this)}
        />
      </div>
    );
  }
}
