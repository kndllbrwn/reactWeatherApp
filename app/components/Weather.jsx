var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            location: 'Miami',
            temp: 88
        }
    },
    handleSearch: function (location) {
        var that = this;

        openWeatherMap.getTemp(location).then((temp) => {
            that.setState({
            location,
            temp
        });
        }, (err) => {
            alert(err)
        });
    },
    render: function () {
        var location = this.state.location;
        var temp = this.state.temp;

        return(
            <div>
                <h3>Get Weather</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage location={location} temp={temp}/>
            </div>
        )
    }
});

module.exports = Weather;