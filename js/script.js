$(document).ready(function () {
	$('#ryu').mouseenter(function() {
    	$('#light').addClass("hide");
    	$('#color').removeClass("hide");
  	})
    .mouseleave(function() {
    	$('#color').addClass("hide");
    	$('#light').removeClass("hide");
  	})
  	$('#shopping').mouseenter(function() {
    	$('#shopping_light').addClass("hide");
    	$('#shopping_color').removeClass("hide");
  	})
    .mouseleave(function() {
    	$('#shopping_color').addClass("hide");
    	$('#shopping_light').removeClass("hide");
  	})
});