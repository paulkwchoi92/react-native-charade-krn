import React, { Component } from "react";

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: "",
    };
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ newTodo: value });
  }

  handleClick(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.input.value];
    //  above code is short hand for concatting
    this.input.value = ""
    this.setState({ todos});
  }

  render() {
    return (
      <div>
        <form>
          <input
            ref={node => this.input = node}
            // value={this.state.newTodo}
            type="text"
            placeholder="new todo"
            // onChange={this.handleChange.bind(this)}
          />
          <button onClick={this.handleClick.bind(this)}>create></button>
        </form>
        <ul>
          {this.state.todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}
