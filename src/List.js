import React, { Component } from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>isCompleted</th>
        <th>Caption</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.todos.map((row, index) => {
    return (
      <tr key={index}>
        <td>
          <input
            type="checkbox"
            onChange={() => {
              const idx = index;
              props.toggleTodos(idx);
            }}
            checked={row.isCompleted}
          />
        </td>
        <td>
          {row.isCompleted ? (
            <div style={{ textDecoration: "line-through" }}>{row.caption}</div>
          ) : (
            <div>{row.caption}</div>
          )}
        </td>
        <td>
          <button
            onClick={() => {
              const idx = index;
              props.removeTodos(idx);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class List extends Component {
  render() {
    return (
      <table>
        <TableHead />
        <TableBody
          todos={this.props.todos}
          removeTodos={this.props.removeTodos}
          toggleTodos={this.props.toggleTodos}
        />
      </table>
    );
  }
}

export default List;
