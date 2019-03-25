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

const RenderText = props => {
  var changedText = "";

  const onSubmit = event => {
    event.preventDefault();
    props.editTodo(props.index, changedText);
  };

  const onChange = event => {
    const { value } = event.target;
    changedText = value;
  };

  if (props.row.isEditable) {
    return (
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
      </form>
    );
  } else {
    return (
      <div className={props.row.isCompleted ? "line-through" : ""}>
        {props.row.caption}
      </div>
    );
  }
};

const TableBody = props => {
  const rows = props.todos.map((row, index) => {
    const editTodo = index => {
      if (!row.isEditable && !row.isCompleted) {
        props.toggleEditable(index);
      }
    };

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
        <td onDoubleClick={() => editTodo(index)}>
          <RenderText row={row} editTodo={props.editTodo} index={index} />
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
          toggleEditable={this.props.toggleEditable}
          editTodo={this.props.editTodo}
        />
      </table>
    );
  }
}

export default List;
