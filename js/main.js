$(document).ready(function(){


/*--- Dropdown Menu Functionality ---*/

/* if(!!('ontouchstart' in window)){//check for touch device
//behaviour and events for touch device
 $(".dropdown-link").click(function(){
    $(".dropdown-menu").slideToggle(500);
  });
}

else{ */
  
  $(".dropdown-link").mouseenter(function(){
    $(".dropdown-menu").slideDown(500);
  });

  $(".dropdown-menu").mouseleave(function(){
    $(".dropdown-menu").slideUp(500);
  });

  $('.no').mouseenter(function() {
        $(".dropdown-menu").slideUp(500);
  });


/* ----- Box Shadow Changes on click ------- */

  $(".category-image").click(function(){
  	$(this).css("box-shadow", "none");
  });


/* -------- Hamburger ----------- */

  $('.hamburger').click(function(){
    $('.mobile-nav').toggleClass('expand');
  });



// ------ Media Queries ------ //

  enquire.register("screen and (max-width:1025px)",{
    match : function() {
      $('#3').insertBefore("#2");
      $('#5').insertBefore("#2");
    },
    unmatch : function() {
      $('#5').insertBefore("#6");
      $('#3').insertBefore("#4");
      $('#2').insertAfter('#1');
    }

  });

});

