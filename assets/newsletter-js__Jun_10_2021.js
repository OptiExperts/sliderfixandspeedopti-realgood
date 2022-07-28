/*
 * First Visit Popup jQuery Plugin version 1.2
 * Chris Cook - chris@chris-cook.co.uk
 * Edit by shaddam2011@gmail.com
 */

(function ($) {

	'use strict';

	$.fn.firstVisitPopup = function (settings) {

		var $var_popup_wrapper;
		var setCookie = function (name, value) {
			var date = new Date(),
				expires = 'expires=';
			date.setTime(date.getTime() + 2592000000);
			expires += date.toGMTString();
			document.cookie = name + '=' + value + '; ' + expires + '; path=/';
		}
		var getCookie = function (name) {
			var allCookies = document.cookie.split(';'),
				cookieCounter = 0,
				currentCookie = '';
			for (cookieCounter = 0; cookieCounter < allCookies.length; cookieCounter++) {
				currentCookie = allCookies[cookieCounter];
				while (currentCookie.charAt(0) === ' ') {
					currentCookie = currentCookie.substring(1, currentCookie.length);
				}
				if (currentCookie.indexOf(name + '=') === 0) {
					return currentCookie.substring(name.length + 1, currentCookie.length);
				}
			}
			return false;
		}
		var showMessage = function () {
		  jQuery('#newsletter-handle').addClass('hidden');
          setTimeout(function() {
			$var_popup_wrapper.css({"opacity": "1", "visibility": "visible", "transition": ".5s"}).fadeIn(500);
			timercountdown();
           }, 30000);
		}

		var showMessage2 = function () {
			jQuery('#newsletter-handle').addClass('hidden');
			//setTimeout(function() {
			$var_popup_wrapper.css({"opacity": "1", "width": "100%", "height": "100%", "bottom": "auto", "right":"auto", "visibility": "visible", "transition": "0s"}).fadeIn(500);
			//  }, 5000);
		}

		var hideMessage = function () {
			//$var_popup_wrapper.fadeOut(500);
			$var_popup_wrapper.css({"opacity": "0", "width": "0", "height": "0", "bottom": "0px", "right":"0px",  "visibility": "visible", "transition": ".5s"});
			setCookie('fvpp' + settings.cookieName, 'true');
			jQuery('#newsletter-handle').removeClass('hidden');
			jQuery('#timer-parent').addClass('hidden');
		}

		var timercountdown = function () {
			var duration = 60*1;
			var display = document.querySelector('#countdown-time');

			var timer = duration, minutes, seconds;
			var timerHandler = setInterval(function () {
				minutes = parseInt(timer / 60, 10);
				seconds = parseInt(timer % 60, 10);
		
				minutes = minutes < 10 ? "0" + minutes : minutes;
				seconds = seconds < 10 ? "0" + seconds : seconds;
		
				display.textContent = minutes + ":" + seconds;
		
				if (--timer < 0) {
					timer = duration;
					hideMessage();
					clearInterval(timerHandler);
				}
			}, 1000);
		}

		$var_popup_wrapper = $('.popup_wrapper');

		if (getCookie('fvpp' + settings.cookieName)) {
			hideMessage();
		} else {
			showMessage();
		}

		jQuery('#newsletter-handle').on('click', showMessage2);
		
		$(".popup_off").on('click', hideMessage);

	};

})(jQuery);
