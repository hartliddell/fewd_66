 

function currencyFormat(number) {
    var currency = parseFloat(number);
    currency = currency.toFixed(2);
    currency = '$' + currency;
    return currency;

}

//save total as variable and set it to zero
//get the data from input
//input shows up on receipt as line item
//input gets added to the total

var total = 0;

$('form').on('submit', function(event) {
	event.preventDefault();
	console.log($('input').val());

	var newnumber = $('input').val();
	console.log(newnumber);
	$('#total').html(newnumber);
	$('#entries').append(newnumber);
});



$('#entries').append('input' + 'newnumber');
  total = total + input;
