//array with name of images
var imageNames = ['fall.jpg', 'winter.jpg', 'grass.jpg', 'desert.jpg']

var imageIndex = 0;

// ON LOAD give image a proper sources
// $('.image-wrapper img').attr('src', 'climate/' + imageNames [0]);

//add click handler
$('.change-image').on('click', changeImage);

function changeImage () {
	console.log('changeImage');
	$('.image-wrapper img').attr('src', 'climate/' + imageNames [imageIndex]);
	//every time we run this function,
	// lets att 1 to our image index
	// imageIndex = imageIndex + 1;
	imageIndex ++;
	if(imageIndex == 4) {
		imageIndex = 0;
	}
}
console.log(imageIndex);
changeImage();