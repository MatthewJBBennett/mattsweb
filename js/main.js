  $( document ).ready(function() {
    console.log( "ready!" );
    var first = "Hello, I'm ";
    var second = "Matthew Bennett";
    var third = ".";
    var speed = 70;
      
    styleText("first", first, function () {
      styleText("second", second, function() {
        styleText("third", third, function () {});
      });
    });
    
    function styleText(id, txt, callback) {
      var i = 0;
      type();
      function type() {
        if (i < txt.length) {
          document.getElementById(id).innerHTML += txt.charAt(i);
          i++;
          setTimeout(type, speed);
        } 
        else {
          callback();
        }
      }
    }    
  });   

      
  $("#work-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});      
  $("#top-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#home").offset().top},
        'slow');
});      
      
   $(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 725;             // set to whatever you want it to be

    if(y_scroll_pos <= scroll_pos_test) {
        console.log("HERE")
        $(act).addClass('active');
    }
});

  $('.nav a').on('click', function(){
    $('.navbar-toggle').click() 
});
   