// this is the STATE of our page

var lightSwitch = 'on';

$('#light-switch').on('click', updateLight);



// check the state of the page,
// and if it's on,
// let's turn the page dark
function updateLight () {
	if(lightSwitch == 'on') {
	// turn the page dark
	$('body').css('background-color','black');
	lightSwitch = 'off';
	} else {
	// turn the page light
	$('body').css('background-color','white');
	lightSwitch = 'on';
	}
}