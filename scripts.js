/*************************getCityID(cityName)**********************************
 * Description: Takes user selected city name and transforms it into its city
 * ID. The Open Weather API site suggests searching by the City ID number for
 * the most accurate results.
 * https://openweathermap.org/current
 * Arguments: cityName - string for the name of the city
 * Output: cityID for cityName, per city.list.json from Open Weather
 ****************************************************************************/
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

/*************************getData(city)**********************************
 * Description: This function makes a new http request and makes a call to
 * the Open Weather API. The API call is built by cocatenating the cityID,
 * the API key (which is stored in a private file) and in indicator to the
 * API to return the temperature in Fahrenheit. The function then parses
 * the JSON returned by the API to get the desired data (condition, temp)
 * Arguments: city - link clicked by user, used to get city namew
 * Output: https request is made to the Open Weather API. Data is returned 
 * from PAI and passed as arguments to the functions displayImage() and
 * displayConditions().
 ****************************************************************************/
function getData(city){
    var request = new XMLHttpRequest();
    var apikey = config.OPEN_WEATHER_KEY;
    
    var selection = city.title;
    var cityID = getCityID(selection);
    var weatherMain, temperatureF, humidity;

    //Used this tutorial to learn how to make the API call https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
    request.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&APPID=" + apikey + "&units=imperial", true);
    request.onload = function() {
        var data = JSON.parse(this.response);
        if(request.status >= 200 && request.status < 400){
            weatherMain = data.weather[0].main;
            temperatureF = data.main.temp;
            displayImage(selection, weatherMain);
            displayConditions(selection, temperatureF, weatherMain);
            data = "";  //clear data for an additional API call
        }
        else
            document.getElementById("printError").innerHTML = "error";
    }
    request.send();
}

/*************************displayImage(city, currentWeather)*****************
 * Description: This function takes the selected city and the current weather
 * condition in that city (Clear, Clouds, Rain, Snow) and displays the 
 * appropriate image.
 * Arguments: city, currentWeather: both passed from getData() which pulls
 * data from the Open Weather API
 * Output: A picture of the city experiencing the current weather condition 
 * is displayed
 * Things I would re-factor: Consider creating a hash table to access the 
 * correct image instead of if/else ifs. Consider finding an API that 
 * would display a live video feed of the city skyline.
 ****************************************************************************/
function displayImage(city, currentWeather){
    //Realized that if another city is clicked without refreshing the page that images continue to append. Called 
    //on Stack Overflow to help me resolve this issue
    //Check if the weather-img element has any children, remove the children if this is true
    //https://stackoverflow.com/questions/6802683/js-how-to-remove-image-with-javascript
    //https://stackoverflow.com/questions/2161634/how-to-check-if-element-has-any-children-in-javascript
    var image_x = document.getElementById("weather-img");
    if(image_x.children.length > 0){
        image_x.removeChild(image_x.childNodes[0]);
    }
    var img = document.createElement("img");

    //If data set were to get much larger it would make sense to refactor this into a hash table
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
    else if(city == "Minneapolis"){
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
    else if(city == "Chicago"){
        if(currentWeather == "Clear"){
            img.src = "https://emptyseats.files.wordpress.com/2012/09/skyline1.jpg?w=950&h=633";
        }
        if(currentWeather == "Clouds"){
            img.src = "https://live.staticflickr.com/2475/3866435526_affac5ba04_b.jpg";
        }
        if(currentWeather == "Rain"){
            img.src = "http://d1b8n6kng8vcnt.cloudfront.net/blog/wp-content/uploads/2013/11/cloudgate.jpg";
        }
        if(currentWeather == "Snow"){
            img.src = "https://cdn.vox-cdn.com/thumbor/FcUeaOtIoWpp8ntAjhsv9m6X2fw=/0x0:1200x630/1200x800/filters:focal(504x219:696x411)/cdn.vox-cdn.com/uploads/chorus_image/image/63491243/weather_cst_010713_005_e1547666837623.0.jpg";
        }
    }
    else if(city == "Dallas"){
        if(currentWeather == "Clear"){
            img.src = "https://images.unsplash.com/photo-1545194445-dddb8f4487c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
        }
        if(currentWeather == "Clouds"){
            img.src = "https://i.redd.it/iwtzyai04aj01.jpg";
        }
        if(currentWeather == "Rain"){
            img.src = "https://dallasnews.imgix.net/1537636445-2013__NM_9RAIND_29038760.JPG?auto=format%2Cenhance&crop=faces%2Centropy&fit=crop&q=40&or=0&w=412&h=549";
        }
        if(currentWeather == "Snow"){
            img.src = "https://dfw.cbslocal.com/wp-content/uploads/sites/15909545/2011/02/108822685.jpg";
        }
    }
    else{
        img.src = ' ';
    }
    img.alt = "current weather image"
    //attempted to make size fixed...this changed the size of each image but did not make the size constant across all images
    img.height = "500";
    img.width = "700";
    document.getElementById("weather-img").appendChild(img);
}

function displayConditions(city, temp, condition){
    document.getElementById("weather-title").innerHTML = "The current weather in " + city + " is " + temp + "F and " + condition;
}

