function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		console.log(weather);
		var temp = (weather.main.temp * (9 / 5)) - 459.67;
		temp = Math.floor(temp)+("&#8457");
		var location = weather.name;

		var template = `
		<div id="temp">${temp}</div>
		<div id="location">${location}</div>
		`

		document.getElementById("weather").innerHTML = template;
		
	})

}
