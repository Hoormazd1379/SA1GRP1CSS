/* JQuery */
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.infoPage').fadeIn(1000);
  } else {
    $('.infoPage').fadeOut();
  }
});