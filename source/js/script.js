"use strict";

$('.search-button').click(function(){
	$(this).parent().toggleClass('open');
	$(this).prev().focus();
});


var toggle = document.querySelector(".header-top__toggle");
var navMain = document.querySelector('.header-nav__list');


toggle.addEventListener('click', function() {
	if (toggle.classList.contains('header-top__toggle--active')) {
		toggle.classList.remove('header-top__toggle--active');
		navMain.classList.remove('header-nav__list--active');
	} else {
		toggle.classList.add('header-top__toggle--active');
		navMain.classList.add('header-nav__list--active');
	}
});
