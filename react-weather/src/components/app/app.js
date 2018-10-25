import React, { Component } from 'react';
import './app.css';
import apixuService from '../../api/apixuService';
import CurrentTemperature from "../current-temperature";
import Forecast from "../forecast/forecast";

export default class App extends Component {

    api = new apixuService();

    state = {
        data: {}
    };
    constructor(){
        super();
        this.onSetData();
    }
    onSetData = () => {
        this.api.getCurrentWeather("Astrakhan").then((info) => {
            this.setState({data: info});
        });
    };

    render() {
        return (
            <div className={"row"}>
                <div className={"col-6"}>
                    <CurrentTemperature data={this.state.data}/>
                </div>
                <div className={"col-12 mt-3"}>
                    <Forecast/>
                </div>
            </div>
        );
    }
}