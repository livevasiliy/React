import React from 'react';

const CurrentTemperature = ({data}) => {

    return (
        <div className={"card text-white bg-dark my-3"}>
            <div className={"card-header"}>
                <div className={"row d-flex align-items-center"}>
                    <img src={data.iconCurrentTemp} alt={data.textCurrentTemp}/>
                    <h2 className={"card-title m-2"}>{data.textCurrentTemp}</h2>
                </div>
            </div>
            <div className={"card-body"}>
                <h2 className={"card-title my-3"}>{data.nameCity}</h2>
                <h3 className={"card-subtitle my-3"}>{data.country}</h3>
                <h3>{data.currentTemp}<sup>°C</sup></h3>
            </div>
        </div>
    );
};
export default CurrentTemperature;