import React, { Component } from "react";
import Form from "./Form";
import List from "./List";

class App extends Component {
  state = {
    todos: []
  };

  handleSubmit = todo => {
    this.setState({ todos: [...this.state.todos, todo] });
  };

  removeTodos = index => {
    const todos = this.state.todos;
    const filteredTodos = todos.filter((todo, i) => {
      return i !== index;
    });
    this.setState({
      todos: [...filteredTodos]
    });
  };

  toggleTodos = id => {
    const todosObj = this.state.todos[id];
    todosObj.isCompleted = !todosObj.isCompleted;
    this.state.todos[id] = todosObj;
    this.setState({
      todos: [...this.state.todos]
    });
  };

  render() {
    return (
      <div className="container">
        <h1>ToDo App</h1>
        <Form handleSubmit={this.handleSubmit} />
        <List
          todos={this.state.todos}
          removeTodos={this.removeTodos}
          toggleTodos={this.toggleTodos}
        />
      </div>
    );
  }
}

export default App;
