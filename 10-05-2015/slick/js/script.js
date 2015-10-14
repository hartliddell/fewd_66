    $('h1').css('color', 'red')
    $('.hero-slider').slick({
        arrows: false,
        dots: true
    });

    var windowHeight = $('window').height();

    $('hero-slider').css('height',windowHeight);
    $('hero-slider .slick-slide').css('height',windowHeight);