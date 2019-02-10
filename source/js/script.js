"use strict";

$('.search-button').click(function(){
  $(this).parent().toggleClass('open');
   $(this).prev().focus();
});
