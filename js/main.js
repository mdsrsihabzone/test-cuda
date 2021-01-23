
$(document).ready(function(){

    // sticky menu
    $("nav").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky")
        }  else {
            $("nav").removeClass("sticky") 
        }
    });

    // mixit up (postfolio section)
    var mixer = mixitup('.gallery');

    $('#icon-social').click(function(e){
        e.preventDefault()


    })
    
    $('.navbar-nav  a[href^="#"]').click(function(e){
        e.preventDefault()

     let target = this.hash;
      $('html, body').animate({
          scrollTop :$(target).offset().top
      },1000);

    })
    
    });

