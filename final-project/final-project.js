$('li[data-title]').on('click', function() {
    if ($(this).find('.popup').length > 0) {
        $(this).find('.popup').remove();
    } else {
        $('.popup').remove();
        var title = $(this).data('title');
        var href = $(this).data('href');
        
        var html = '<div class="popup">';
            html += '<h3>' + title + '</h3>';
            html += '<a href="' + href +  '" target="_blank">MORE</a>'
            html += '</div>';

        $(this).append(html);
    }
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});