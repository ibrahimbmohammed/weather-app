import React, { Component } from "react";

export default class InputContainer extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="country"
            placeholder="enter name of country"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="enter name of city"
            required
          />

          <button>get weather</button>
        </form>
      </div>
    );
  }
}
