function getSelectedCity(){
    var selection = document.getElementById("city").value;
    document.getElementById("printCity").innerHTML = "You selected:" + selection;
}

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

function getData(){
    var request = new XMLHttpRequest();
    var apikey = config.OPEN_WEATHER_KEY;
    
    var selection = document.getElementById("city").value;
    var cityID = getCityID(selection);

    //request.open('GET', 'api.openweathermap.org/data/2.5/weather?id=' + cityID + 'APPID=' + apikey, true);
    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=5263045&APPID=61234ef415646940732b8dba86cfb345', true);
    request.onload = function() {
        var data = JSON.parse(this.response);
        if(request.status >= 200 && request.status < 400){
            //console.log(data.weather[0].main);
            document.getElementById("printCity").innerHTML = "You selected:" + selection + ". The weather is " + data.weather[0].main;
        }
        else
            //console.log('error');
            document.getElementById("printCity").innerHTML = "error";
    }
    request.send();
}