import React, { Component } from 'react';
import WeatherDetail from './WeatherDetail';
import '../css/App.css';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherObject: {},
      weatherItems : ['T', 'F', 'S', 'G', 'Pp', 'V'],
    };
  }

  componentDidMount() {
    let apiKey = 'b34c4b0f-436f-4a6e-a78b-ff02723edab2';
    let apiMetOffice = `http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/all?res=3hourly&key=${apiKey}`;

    fetch(apiMetOffice)
      .then(results => results.json())
      .then(results => {
        const weatherObject = results;
        // console.log(weatherObject.SiteRep.DV.Location.Period[0].Rep);
        // console.log(weatherObject.SiteRep);
        this.setState({ weatherObject: weatherObject.SiteRep})
      });
  }

  render() {
    if(!this.state.weatherObject.DV){
      return(
        <div>
         <p>Loading...</p>
        </div>
      )
    }

    let weatherDetails = [...this.state.weatherObject.DV.Location].splice(0,100).map((element, index) =>
      <WeatherDetail
        key={index}
        weatherObject={element}
      />
    );
    
    return(
      <div>
        <h1>Weather</h1>
        <div className="container">
          {weatherDetails}
        </div>
      </div>
    );
  }

}

export default Weather;