// this code smells...
$(document).ready(function () {
	$('.undernav ul li.nav1').hoverIntent({
		over: function () {
			$.fn.menudropdown('nav1');
		}
	});

	$('.undernav ul li.nav2').hoverIntent({
		over: function () {
			$.fn.menudropdown('nav2');
		}
	});

	$('.undernav ul li.nav3').hoverIntent({
		over: function () {
			$.fn.menudropdown('nav3');
		}
	});

	$('.undernav ul li.nav4').hoverIntent({
		over: function () {
			$.fn.menudropdown('nav4');
		}
	});

	$('.menudropdown.nav1').mouseleave(function () {
		$.fn.menuslideup('nav1');
	});

	$('.menudropdown.nav2').mouseleave(function () {
		$.fn.menuslideup('nav2');
	});

	$('.menudropdown.nav3').mouseleave(function () {
		$.fn.menuslideup('nav3');
	});

	$('.menudropdown.nav4').mouseleave(function () {
		$.fn.menuslideup('nav4');
	});

	$('.topnav').mouseenter(function () {
		$('.menudropdown').hide();
	});

});

(function( $ ) {
 
    $.fn.menudropdown = function( menuName ) {

    	$('.menudropdown').hide();

		$('.menudropdown.' + menuName).slideDown(200, function () {
			$(this).show();
		});

    };
 
}( jQuery ));

(function( $ ) {
 
    $.fn.menuslideup = function( menuName ) {

		$('.menudropdown.' + menuName).slideUp(200, function () {
			$(this).hide();
		});

    };
 
}( jQuery ));