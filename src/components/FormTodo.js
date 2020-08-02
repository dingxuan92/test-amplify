import React, { Component } from "react";

export default class FormTodo extends Component {
  state = {
    inputValue: "",
    todos: [],
  };

  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  buttonSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputValue !== "") {
      this.setState({
        // todos: [this.state.inputValue],
        todos: [this.state.inputValue, ...this.state.todos],
        inputValue: "", // input field clearing on submitting
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.buttonSubmit}>
        <input
          type="text"
          value={this.state.inputValue}
          placeholder="Enter task..."
          onChange={this.inputChange}
        />
        <button onClick={this.buttonSubmit}>Add task</button>
        <ol>
          {this.state.todos.map((todo, index) => (
            <li key={index} onClick={this.listRemove}>
              {todo}
            </li>
          ))}
        </ol>
      </form>
    );
  }
}
