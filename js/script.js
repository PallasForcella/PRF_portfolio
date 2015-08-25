$(document).ready(function () {
	$('#ryu').mouseenter(function() {
    	$('#light').addClass("hide");
    	$('#color').removeClass("hide");
  	})
    .mouseleave(function() {
    	$('#color').addClass("hide");
    	$('#light').removeClass("hide");
  	})
});