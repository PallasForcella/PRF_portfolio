$(document).ready(function () {
	$('.ryu').mouseenter(function() {
    $('.link1bw').hide();
    $('.link1').show();
  })
    .mouseleave(function() {
    $('.link1').hide();
    $('.link1bw').show();
  })
});