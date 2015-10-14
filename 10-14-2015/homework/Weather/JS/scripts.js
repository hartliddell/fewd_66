$('button').on('click', americanize);

function americanize(event) {
	event.preventDefault();
	var tempCelsius = $('input').val();
	console.log(tempCelsius);
	convertTemp(tempCelsius);
}

function convertTemp(num) {
	var newTemp = num * 1.8 + 32;
	console.log(newTemp);
	updateHtmlTemp(newTemp);
}

function updateHtmlTemp(num) {
	$('.tempFahrenheit').html(num);
	$('input').val('');
	if (false) { 
} else {
	$('body').css('background-color', 'yellow');
}

}


