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
    const todosObj = [...this.state.todos];
    todosObj[id].isCompleted = !todosObj[id].isCompleted;
    this.setState({
      todos: todosObj
    });
  };

  toggleEditable = id => {
    const todosObj = [...this.state.todos];
    todosObj[id].isEditable = !todosObj[id].isEditable;
    this.setState({
      todos: todosObj
    });
  };

  editTodo = (id, caption) => {
    const todosObj = [...this.state.todos];
    todosObj[id].caption = caption;
    todosObj[id].isCompleted = false;
    todosObj[id].isEditable = false;
    this.setState({
      todos: todosObj
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
          toggleEditable={this.toggleEditable}
          editTodo={this.editTodo}
        />
      </div>
    );
  }
}

export default App;
