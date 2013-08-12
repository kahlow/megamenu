$(document).ready(function () {
	$('.undernav ul li a').hoverIntent({
		over: function () {
			$('.menudropdown').show();
			$('.menudropdown', this).slideDown(200);
			timeout: 200
		},
		out: function () {
			$('.menudropdown').hide();
			$('.menudropdown', this).slideUp(200);
		},
		timeout: 200
	});
});