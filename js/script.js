$(document).ready(function () {
	$('.undernav ul li').hoverIntent({
		over: function () {
			// if not visible
			if (!$('.menudropdown').is(':visible')) {
				$('.menudropdown').slideDown(200, function () {
					$('.menudropdown').show();
				});
			}
			else {
				// if visible, slide up and slide down new menu
				$('.menudropdown').slideUp('fast', function () {
					$('.menudropdown').hide();
				});
				$('.menudropdown').slideDown(200, function () {
					$('.menudropdown').show();
				});
			}
		}
	});

	$('.menudropdown').hover(
		function () {

		},
		function () {
			$('.menudropdown').slideUp('fast', function () {
				$('.menudropdown').hide();
			});
		}
	);
});