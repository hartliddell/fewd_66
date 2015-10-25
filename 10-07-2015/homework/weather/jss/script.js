// Button click event to get data
$('button').on('click', americanize);

// Function to Americanize the Celcius value
function americanize(event) {

    // Prevent the form from submitting
    event.preventDefault();

    // Saves input into a variable
    var number = $('input').val();

    // Run convertTemp function
    convertTemp(number);
}

// Function to convert our Temperature
function convertTemp(num) {
    var newTemp = num * 1.8 + 32;
    console.log(newTemp);
    updateHtmlTemp(newTemp);
}

// Function update our HTML
function updateHtmlTemp(num) {
    $('.tempFahrenheit').html(num);
    $('input').val('');

    console.log(num);
    if (num > 90) {
        $('body').css('background-color','red');

    } else {
        $('body').css('background-color','yellow');
    }
}


// $(.body).css('background-iamge', 'url("../images/nyc.jpg")');
// else if (num < 90 && num > 80) {   
// }
// background-size: cover;
// background-repeat: no-repeat;

// var $boday = $('body');