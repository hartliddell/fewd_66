// (function() {

// 	'use strict';

// 	/*
// 	 * Attach click events and pass event specific data
// 	 */

// 	$('.main__primary__article__hidden-trigger').on('click', {
// 			hiddenElement: '.main__primary__article__hidden',
// 			moreText: 'Read More',
// 			lessText: 'Read Less'
// 		}, addShowToggle);

// 	$('.main__aside__hidden-trigger').on('click', {
// 			hiddenElement: '.main__aside__hidden',
// 			moreText: 'Learn More',
// 			lessText: 'Learn Less'
// 		}, addShowToggle);

// 	/*
// 	 * Create reusable function
// 	 * to hide and show specific elements on page
// 	 */

$('a.scroll-to-link').on('click', scrollToLink);

function scrollToLink(event) {
	event.preventDefault();
	var targetName = $(event.currentTarget).attr('href');
	var offset = $(targetName).offset();

	console.log(offset.top);
	$('html, body').animate({
		scrollTop: offset.top}, 1000);
}