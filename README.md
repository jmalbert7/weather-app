# weather-app
This webpage displays the weather at the Penrod office locations. It is built using HTML/CSS and basic JavaScript
on VS Code. The Open Weather API is used to get weather data. The CSS framework files are provided via Lightning Design System.

Because this website uses the Open Weather API, the private API key is hidden in a .gitignore (config.js) and accessed
via an indirect variable to complete the call so that the key is not exposed in a public repo. If you fork this project,
obtain an API key from https://openweathermap.org/ and add a config.js file to the repo structured like so:

var config = {
    OPEN_WEATHER_KEY : 'your key'
}
