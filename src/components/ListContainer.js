import React, { Component } from "react";
import SkyIcons from "./SkyIcons";

export default class ListContainer extends Component {
  render() {
    const { myCurrentState, handleIcons } = this.props;
    if (myCurrentState.showLabels && !myCurrentState.error) {
      return (
        <div>
          <p>Temperature: {myCurrentState.temperature}</p>
          <p>City: {myCurrentState.city}</p>
          <p>Country: {myCurrentState.country}</p>
          <p>Humidity: {myCurrentState.humidity}</p>
          <p>Description: {myCurrentState.description}</p>

          <p>Main: {handleIcons(myCurrentState.main)}</p>
          <SkyIcons handleIcons={handleIcons} main={myCurrentState.main} />
        </div>
      );
    } else if (myCurrentState.error) {
      return (
        <div>
          <p>error: please enter a valid city or country name</p>
        </div>
      );
    } else {
      return null;
    }
  }
}