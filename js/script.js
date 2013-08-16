// this code smells...
$(document).ready(function () {
	$('.undernav ul li.patients').hoverIntent({
		over: function () {
			$.fn.menudropdown('patients');
		}
	});

	$('.undernav ul li.locations').hoverIntent({
		over: function () {
			$.fn.menudropdown('locations');
		}
	});

	$('.undernav ul li.medical').hoverIntent({
		over: function () {
			$.fn.menudropdown('medical');
		}
	});

	$('.undernav ul li.doctor').hoverIntent({
		over: function () {
			$.fn.menudropdown('doctor');
		}
	});

	$('.menudropdown.patients').mouseleave(function () {
		$.fn.menuslideup('patients');
	});

	$('.menudropdown.locations').mouseleave(function () {
		$.fn.menuslideup('locations');
	});

	$('.menudropdown.medical').mouseleave(function () {
		$.fn.menuslideup('medical');
	});

	$('.menudropdown.doctor').mouseleave(function () {
		$.fn.menuslideup('doctor');
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