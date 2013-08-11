$(document).ready(function () {
	$('.dropdown').hoverIntent({
		over: function () {
			$('.dropdown-menu', this).slideDown(200);
			timeout: 200
		},
		out: function () {
			$('.dropdown-menu', this).slideUp(200);
		},
		timeout: 200
	});
});