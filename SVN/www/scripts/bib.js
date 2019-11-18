
function btn_img() {
  window.open("bib_text.html","_self");
}

function btn_text() {
  window.open("bib_img.html","_self");
}

$(document).ready(function(){
  $("button").click(function(){
    $(".bib-page-fade").fadeOut(200);
  });
});

$(document).ready(function(){
  $('.bib-page-fade').css('display', 'none');
  $('.bib-page-fade').delay(150).fadeIn(200);
});
