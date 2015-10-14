$('button').on('click', americanize)

function americanize(event) {
  event.preventDefault();
  var number = $('input').val();
  convertTemp(number);
}

function convertTemp(num) {
  var newTemp = num * 1.8 + 32;
  console.log(newTemp);
  updateHtmlTemp(newTemp);
}

function updateHtmlTemp(num) {
  $('.tempFahrenheit').html(num);
}
