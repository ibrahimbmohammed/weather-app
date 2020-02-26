import React, { Component } from "react";

export default class InputContainer extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="country"
            placeholder="enter name of country"
            required
          />{" "}
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="city"
            placeholder="enter name of city"
            required
          />
        </div>
        <div className=" text-center">
          {" "}
          <button className="btn btn-primary ">get weather</button>
        </div>
      </form>
    );
  }
}
