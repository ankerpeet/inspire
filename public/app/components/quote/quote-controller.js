function QuoteController() {

	var qs = new QuoteService()

	qs.getQuote(function (obj) {
		var quote = obj.quote;
		var author = obj.author;
		draw(quote, author)

	})

	function draw(quote, author) {
		var template = `
		<div id="myQuote"><q>${quote}</q></div>
		<div id="author">- ${author}</div>
		`
		document.getElementById("quote").innerHTML = template;
	}
	$("#quote").hover(function () {
		$("#author").css("display", "block");
	}, function () {
		$("#author").css("display", "none");
	});
}
