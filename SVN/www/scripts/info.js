/* JQuery:

Scroll library for the homepage by: Hoormazd Pirayeshfar

 */
$(document).scroll(function() {
  var y = $(this).scrollTop();

  /* VUL*/
  if (y > 1000 && y < 2000) {
    $('#infoVUL').fadeIn(1000);
    $('#infoMORE').fadeOut();
    $('#infoHIS').fadeOut();
    $('#infoBUG').fadeOut();
    $('#infoMAL').fadeOut();
  } 

  /* MAL*/
  else if (y > 2000 && y < 3000) {
    $('#infoMAL').fadeIn(1000);
    $('#infoMORE').fadeOut();
    $('#infoHIS').fadeOut();
    $('#infoBUG').fadeOut();
    $('#infoVUL').fadeOut();
  } 

  /* BUG*/
  else if (y > 3000 && y < 4000) {
    $('#infoBUG').fadeIn(1000);
    $('#infoMORE').fadeOut();
    $('#infoHIS').fadeOut();
    $('#infoMAL').fadeOut();
    $('#infoVUL').fadeOut();
  } 

  /* HIS*/
  else if (y > 4000 && y < 5000) {
    $('#infoHIS').fadeIn(1000);
    $('#infoMORE').fadeOut();
    $('#infoBUG').fadeOut();
    $('#infoMAL').fadeOut();
    $('#infoVUL').fadeOut();
  } 

  /* MORE*/
  else if (y > 5000 && y < 6000) {
    $('#infoMORE').fadeIn(1000);
    $('#infoHIS').fadeOut();
    $('#infoBUG').fadeOut();
    $('#infoMAL').fadeOut();
    $('#infoVUL').fadeOut();
  } 

  else if (y > 6000) {
    $(this).scrollTop(0);
  }

  else {
    $('.infoPage').fadeOut();
  }
});