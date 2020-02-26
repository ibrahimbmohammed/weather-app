//var Skycons = require("react-skycons");
import React from "react";
import Skycons from "react-skycons";

export default class SkyIcons extends React.Component {
  render() {
    const { handleIcons, main } = this.props;
    return <Skycons color="white" icon={handleIcons(main)} autoplay={true} />;
  }
}
