import React, { Component } from 'react';
import '../css/App.css';
import globalVars from '../config/config';

class WeatherDetail extends Component {

  getLatestWeatherValue(property, weatherObject){
    let weatherData = weatherObject;
    let latestPeriod = weatherData.Period[weatherData.Period.length - 1];

    let value = latestPeriod.Rep[latestPeriod.Rep.length - 1][property];
    let legendKey = globalVars.legend.Wx.Param.find(o => o.name === property);


    return `${legendKey.$}: ${value} ${legendKey.units}`;
  }

  render() {
    let weatherItemList = globalVars.weatherKey.map(weatherKey => 
      <div key={weatherKey} 
           className={`weather-detail weather-detail__${weatherKey}`}
      >
        {this.getLatestWeatherValue(weatherKey, this.props.weatherObject)}
      </div>
    );
    
    return (
      <div className="weather-details">
        <div className="weather-details__wrapper">
          <h2>{this.props.weatherObject.name}</h2>
          <div className="weather-details__block">
            {weatherItemList}
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherDetail;