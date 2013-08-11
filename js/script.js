$(document).ready(function () {
	$('.dropdown').hover(function () {
		$('.dropdown-menu', this).slideDown(200);
	},
	function () {
		$('.dropdown-menu', this).slideUp(200);
	});
});