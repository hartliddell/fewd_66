var lightSwitch = 'on';

$('#light-switch').on('click', updateLight);

function updateLight() {
if (lightSwitch == 'on') {
	//turn the page dark
	$('body').css('background-color', 'black');
	lightSwitch = 'off';
} else {
	//turn the page light
	$('body').css('background-color', 'white');
	lightSwitch = 'on';
}
}
