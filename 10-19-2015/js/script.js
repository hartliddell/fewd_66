//test is the file connected

// alert('test');

//test if jquery is connected

// $('h1').css('color', 'blue');

// CHECK OUT DATEPICKER

$('form').validate();

$('input[name="start_date"]').datepicker({
	minDate: 0,
	maxDate: +7,
});

$('input[name="end_date"]').datepicker({
	minDate: +1,
	maxDate: +7,
});
