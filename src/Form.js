import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      caption: "",
      isCompleted: false
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { value: caption } = event.target;
    const { abc } = this.state;

    console.log(abc);

    const isCompleted = false;

    // console.log(this.state)
    // console.log(event.target)
    // console.log('caption', caption)
    // console.log('isCompleted', isCompleted)

    this.setState({
      caption,
      isCompleted
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { caption } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          name="caption"
          value={caption}
          placeholder="Enter Caption"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Form;
