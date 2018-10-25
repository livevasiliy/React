import React, { Component } from "react";
import "./forecast.css";

export default class Forecast extends Component {
  render() {
    return (
      <div className={"row"}>
        <div className={"col-3"}>
          <div className={"card text-white bg-dark"}>
            <div className={"card-header"}>
              <img
                src="//cdn.apixu.com/weather/64x64/night/116.png"
                alt="icon"
              />
            </div>
            <div className={"card-body"}>
              <h2 className={"card-title"}>Cloudy</h2>
              <h3 className={"card-subtitle my-3"}>
                +18
                <sup>°C</sup>
              </h3>
              <h3 className={"card-subtitle my-3"}>
                +9
                <sup>°C</sup>
              </h3>
            </div>
          </div>
        </div>
        <div className={"col-3"}>
          <div className={"card text-white bg-dark"}>
            <div className={"card-header"}>
              <img
                src="//cdn.apixu.com/weather/64x64/night/116.png"
                alt="icon"
              />
            </div>
            <div className={"card-body"}>
              <h2 className={"card-title"}>Cloudy</h2>
              <h3 className={"card-subtitle my-3"}>
                +18
                <sup>°C</sup>
              </h3>
              <h3 className={"card-subtitle my-3"}>
                +9
                <sup>°C</sup>
              </h3>
            </div>
          </div>
        </div>
        <div className={"col-3"}>
          <div className={"card text-white bg-dark"}>
            <div className={"card-header"}>
              <img
                src="//cdn.apixu.com/weather/64x64/night/116.png"
                alt="icon"
              />
            </div>
            <div className={"card-body"}>
              <h2 className={"card-title"}>Cloudy</h2>
              <h3 className={"card-subtitle my-3"}>
                +18
                <sup>°C</sup>
              </h3>
              <h3 className={"card-subtitle my-3"}>
                +9
                <sup>°C</sup>
              </h3>
            </div>
          </div>
        </div>
        <div className={"col-3"}>
          <div className={"card text-white bg-dark"}>
            <div className={"card-header"}>
              <img
                src="//cdn.apixu.com/weather/64x64/night/116.png"
                alt="icon"
              />
            </div>
            <div className={"card-body"}>
              <h2 className={"card-title"}>Cloudy</h2>
              <h3 className={"card-subtitle my-3"}>
                +18
                <sup>°C</sup>
              </h3>
              <h3 className={"card-subtitle my-3"}>
                +9
                <sup>°C</sup>
              </h3>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
