$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").slideToggle();
    $(".walrus-hidden").slideToggle();
  })
  $(".clickable2").click(function() {
    $(".walrus2-showing").fadeToggle();
    $(".walrus2-hidden").fadeToggle();
  });
});
