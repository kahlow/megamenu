$(document).ready(function () {
	$('.undernav ul li a').hoverIntent({
		over: function () {
			$('.menudropdown').slideDown(200, function (){
				$('.menudropdown').show();
			});
		},
		out: function () {
			$('.menudropdown').hide();
			$('.menudropdown', this).slideUp(200);
		},
		timeout: 200
	});
});