$('#footer').css('margin-top',$(document).height() - ($('#header').height() + $('#content').height()  ) - $('#footer').height());


$('#back-to-top').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 700);
});

 
//paste this code under the head tag or in a separate js file.
// Wait for window load
$(window).on("load",function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});

var tabsFn = (function() {
  
  function init() {
    setHeight();
  }
  
  function setHeight() {
    var $tabPane = $('.tab-pane'),
        tabsHeight = $('.nav-tabs').height();
    
    $tabPane.css({
      height: tabsHeight
    });
  }
    
  $(init);
})();


// JS START HERE
$(document).ready(function() {
  // for wow js
  new WOW().init();
  // for type js
  //for footer
  var typed = new Typed('#typed',{
     strings:["UNIVERSITY OF RIZAL SYSTEM. ALL RIGHT RESERVED 2020"],
     startDelay: 500,
     backSpeed: 50,
     typeSpeed: 50,
     backDelay: 4000,
             loop: true,
   });
  //for banner
   var typed = new Typed('#typed2',{
     strings:["University of Rizal System"],
     startDelay: 500,
     backSpeed: 50,
     typeSpeed: 50,
     backDelay: 4000,
             loop: true,
   });
   
   
    
   /*Scroll to top when arrow up clicked BEGIN*/
    $(window).scroll(function() {
      var height = $(window).scrollTop();
      if (height > 100) {
        $('#back2Top').fadeIn();
      } else {
        $('#back2Top').fadeOut();
      }
    });
    $(document).ready(function() {
      $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });

    });
    $(window).scroll(function() {
      var height = $(window).scrollTop();
      if (height > 100) {
        $('#backtohome').fadeIn();
      } else {
        $('#backtohome').fadeOut();
      }
    });
    $(document).ready(function() {
      $("#backtohome").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });

    });
    /*Scroll to top when arrow up clicked END*/

 

$(document).ready(function(){
$(window).scroll(function() { // check if scroll event happened
  if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
  $("#header").css("background-color", "rgba(0,0,0,0.6)"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
  } else {
  $("#header").css("background-color", "transparent"); // if not, change it back to transparent
  }
});
});
    

        
 
// for sidenav

 
$(document).ready(function(){
$(window).scroll(function() { // check if scroll event happened
  if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
  $("#header2").css("background-color", "rgba(0,0,0,0.6)"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
  } else {
  $("#header2").css("background-color", "transparent"); // if not, change it back to transparent
  }
});
});

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
//   document.getElementById("main").style.border = "block";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
//   document.getElementById("mySidebar").style.border = "none";

  let myElement = document.querySelector("#mySidebars");
  myElement.style.border= "0";
}
// for pre loader

var loader;
 function loadNow(opacity){
   if (opacity <= 0){
       displayContent();
     }
  else{
    loader.style.opacity = opacity;
    window.setTimeout(function(){
      loadNow(opacity - 0.05)
    },100);
  } 
 }

 function displayContent(){
   loader.style.display = 'none';
   document.getElementById('main-content').style.display = 'block';
 }

 document.addEventListener("DOMContentLoaded", function(){
   loader = document.getElementById('preloader');
   loadNow(1);
 });


});

