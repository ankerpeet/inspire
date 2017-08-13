function WeatherService() {
	var location = "";

	this.getLocation = function() {
		$.ajax({
			type: "GET",
			url: "https://ipinfo.io/json/",
			success: coordinates
		});

		// coordinates callback function
		function coordinates(data) {
			var coords = data.loc;
			var city = data.city;
			var region = data.region;
			var country = data.country;

			console.log(city)
		}
	}

	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=a9526bc90934e0ce29236acaaca67c85'
	var apiUrl = url + encodeURIComponent(url2);

	this.getWeather = function (callWhenDone) {
		$.get(apiUrl, function (res) {
			res = JSON.parse(res)
			localStorage.setItem('weather', JSON.stringify(res))
			// HEY FUN FACT 
			// Have you ever wanted to know the temperature measured in kelvin?
			// You should probably convert the temperature data
			callWhenDone(res);
		})
	}

}