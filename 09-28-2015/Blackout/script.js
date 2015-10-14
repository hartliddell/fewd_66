var lightSwitch = 'on';

$('#lightSwitch').on('click', updateLight);

function updateLight(){
    console.log('updateLight');
    if( lightSwitch == 'on') {
        $('body').css('backgroundColor','black');
        lightSwitch = 'off';
    } 
    else {
        $('body').css('backgroundColor','white');
        lightSwitch = 'on';
    }
}
/* function updateLight() {
    $('body').toggleClass('dark');
 }*/