const globalVars = 
  {
    weatherKey: ['T', 'F', 'S', 'G', 'Pp', 'V'],
    legend: {
      "Wx": {
        "Param": [{
          "name": "F",
          "units": "C",
          "$": "Feels Like Temperature"
        }, {
          "name": "G",
          "units": "mph",
          "$": "Wind Gust"
        }, {
          "name": "H",
          "units": "%",
          "$": "Screen Relative Humidity"
        }, {
          "name": "T",
          "units": "C",
          "$": "Temperature"
        }, {
          "name": "V",
          "units": "",
          "$": "Visibility"
        }, {
          "name": "D",
          "units": "compass",
          "$": "Wind Direction"
        }, {
          "name": "S",
          "units": "mph",
          "$": "Wind Speed"
        }, {
          "name": "U",
          "units": "",
          "$": "Max UV Index"
        }, {
          "name": "W",
          "units": "",
          "$": "Weather Type"
        }, {
          "name": "Pp",
          "units": "%",
          "$": "Precipitation Probability"
        }]
      }
    }
  }

export default globalVars;
