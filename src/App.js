import React, { Component } from "react";
import TitleContainer from "./components/TitleContainer";
import InputContainer from "./components/InputContainer";
import ListContainer from "./components/ListContainer";
const key = "10942382995fc0a2dfe1451b9835280a";
const proxy = "https://cors-anywhere.herokuapp.com/";
// const url =
//   "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22";

export default class extends Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    main: "",
    error: "",
    showLabels: false
  };
  handleSubmit = async e => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    const api_call = await fetch(
      `${proxy}https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}&units=metric`
    );
    const data = await api_call.json();

    console.log(data.cod);
    if (data.cod === "404") {
      this.setState({
        error: true
      });
    } else {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather["0"].description,
        main: data.weather["0"].main,
        error: false,
        showLabels: true
      });
    }
  };
  handleIcons = main => {
    // input
    const apiMain = [
      "Clear",
      "Dust",
      "Sand",
      "Ash",
      "Smoke",
      "Clouds",
      "Rain",
      "Drizzles",
      "Snow",
      "Thunderstorm",
      "Tornado",
      "Squall",
      "Haze",
      "Fog",
      "Mist"
    ];
    // output
    const skyIcons = [
      "clear_day",
      "partly_cloudy_day",
      "partly_cloudy_day",
      "partly_cloudy_day",
      "partly_cloudy_day",
      "cloudy",
      "rain",
      "rain",
      "snow",
      "wind",
      "wind",
      "wind",
      "fog",
      "fog",
      "fog"
    ];
    const index = apiMain.indexOf(main);

    const icon = skyIcons[index];
    return icon.toUpperCase();
  };

  render() {
    return (
      <div>
        <TitleContainer />
        <InputContainer handleSubmit={this.handleSubmit} />{" "}
        <ListContainer
          myCurrentState={this.state}
          handleIcons={this.handleIcons}
        />{" "}
      </div>
    );
  }
}
