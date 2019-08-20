var request = new XMLHttpRequest()

var milwaukee = 5263045

request.open('GET', 'api.openweathermap.org/data/2.5/weather?id' + milwaukee, true)
request.onload = function() {
    var data = JSON.parse(this.response)
    if(request.status >= 200 && request.status < 400){
        console.log(weather.main)
    }
    else
        console.log('error')
}
request.send()