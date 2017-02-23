var React = require('react');

var About = () => {
  return (
    <div>
      <h1 className="text-center">About</h1>
        <div className="callout primary">
          <p>
            This is a weather app I built to get practical experience with React!
          </p>
          <p>
            Here are some of the tools I used:
          </p>
          <ul>
            <li>
              <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
            </li>
            <li>
              <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
            </li>
            <li>
              <a href="https://github.com/kndllbrwn/reactWeatherApp">My Github Repo</a> - This is a link to my repo!
            </li>
          </ul>

        </div>
    </div>
  )
};

module.exports = About;
