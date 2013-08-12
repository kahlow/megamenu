$(document).ready(function () {
	$('.undernav ul li a').hoverIntent({
		over: function () {
			$('.menudropdown').slideDown(200, function () {
				$('.menudropdown', this).show();
			});
		},
		out: function () {			
			$('.menudropdown').slideUp(200, function () {
				$('.menudropdown', this).hide();
			});
		},
		timeout: 200
	});
});