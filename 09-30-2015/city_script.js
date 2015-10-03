var imageNames = ['austin.jpg', 'la.jpg', 'nyc.jpg', 'sf.jpg', 'sydney.jpg']

var imageIndex =0;

$('.change-image') .on('click', changeImage);

function changeImage() {
$('.container img') .attr('src'), 'homework/' +imageNames[imageIndex]);
imageIndex ++;
if(imageIndex = 0);
}

changeImage();