var imageNames = ['fall.jpg', 'winter.jpg', 'grass.jpg', 'desert.jpg'];

var imageIndex = 0;

//

//$('.image-wrapper img').attr('src'), 'images/' + imageNames[0]);

$('.change-image').on('click', changeImage); 

function changeImage() {
	$('.image-wrapper img').attr('src', 'images/' + imageNames[imageIndex]);
	imageIndex ++;
	if(imageIndex == 4) {
	imageIndex = 0;
	}

}

changeImage();