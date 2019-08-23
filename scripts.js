/*************************getCityID(cityName)**********************************
 * Description: Takes user selected city name and transforms it into its city
 * ID. The Open Weather API site suggests searching by the City ID number for
 * the most accurate results.
 * https://openweathermap.org/current
 * Arguments: cityName - string for the name of the city
 * Output: cityID for cityName, per city.list.json from Open Weather
 */
function getCityID(cityName){
    if(cityName == "Milwaukee")
        return 5263045;
    else if(cityName == "Minneapolis")
        return 4275586;
    else if(cityName == "Chicago")
        return 3582383;
    else if(cityName == "Dallas")
        return 4684888; 
    else   
        return null;
}

function getData(city){
    var request = new XMLHttpRequest();
    var apikey = config.OPEN_WEATHER_KEY;
    
    //var selection = document.getElementById("city").title;
    var selection = city.title;
    var cityID = getCityID(selection);
    var weatherMain;

    request.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&APPID=" + apikey, true);
    request.onload = function() {
        var data = JSON.parse(this.response);
        if(request.status >= 200 && request.status < 400){
            console.log(data.weather[0].main);
            //console.log(data.coord.lon);
            document.getElementById("weather-title").innerHTML = "The Current Weather in " + selection;
            weatherMain = "Clear";//data.weather[0].main;
            displayImage(selection, weatherMain);
            data = "";
        }
        else
            //console.log('error');
            document.getElementById("printCity").innerHTML = "error";
    }
    request.send();
}

function displayImage(city, currentWeather){
    //Realized that if another city is clicked that images continue to append. Called on Stack Overflow to help me resolve
    //Check if the weather-img element has any children, remove the children if this is true
    //https://stackoverflow.com/questions/6802683/js-how-to-remove-image-with-javascript
    //https://stackoverflow.com/questions/2161634/how-to-check-if-element-has-any-children-in-javascript
    var image_x = document.getElementById("weather-img");
    console.log(image_x.children.length)
    if(image_x.children.length > 0){
        image_x.removeChild(image_x.childNodes[1]);
    }
    var img = document.createElement("img");
    if(city == "Milwaukee"){
        if(currentWeather == "Clear"){
            img.src = "https://uwm.edu/wp-content/uploads/2018/12/20181017_IMC_EH_0001_artmuseum.jpg";
        }
        if(currentWeather == "Clouds"){
            img.src = "https://upload.wikimedia.org/wikipedia/commons/8/8a/Cloudy_Milwaukee_skyline_Feb_05.jpg";
        }
        if(currentWeather == "Rain"){
            img.src = "http://archive.jsonline.com/Services/image.ashx?domain=www.jsonline.com&file=38608497-mjs_rain_14518-_de_sisti-_sisti.jpg&resize=660*432";
        }
        if(currentWeather == "Snow"){
            img.src = "https://onmilwaukee.com/images/articles/up/uprainhailsleetsnow/uprainhailsleetsnow_fullsize_story1.jpg?1326830728";
        }
    }
    if(city == "Minneapolis"){
        if(currentWeather == "Clear"){
            img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Minneapolis_skyline_from_Prospect_Park_Water_Tower%2C_July_2014.jpg/900px-Minneapolis_skyline_from_Prospect_Park_Water_Tower%2C_July_2014.jpg";
        }
        if(currentWeather == "Clouds"){
            img.src = "https://farm3.staticflickr.com/2880/33756580301_8ce61f6600_b.jpg";
        }
        if(currentWeather == "Rain"){
            img.src = "https://i.redd.it/c2m7fh2zatm21.jpg";
        }
        if(currentWeather == "Snow"){
            img.src = "https://s3-eu-west-1.amazonaws.com/acitymadebypeople/images/Articles/citinerary-minneapolis-wintersports-01.jpg?mtime=20170127164007";
        }

    }
    img.alt = "current weather image"
    img.height = "500";
    img.width = "500";
    document.getElementById("weather-img").appendChild(img);
    
}