import React, { Component } from 'react';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }


  render() {
    return (
      <div>
        <form>
          <input value={this.state.newTodo} type="text" placeholder="new todo" />
          <button>create></button>
        </form>
        <ul>
          {this.state.todos.map(todo => <li>{todo}</li>)}
        </ul>
     </div>
    )
  }
}