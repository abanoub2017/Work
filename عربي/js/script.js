$(document).ready(function(){
    
    "ues strict";
    
    // Nice Scrol
     $("html").niceScroll({ });
      $(".navbar-collapse").niceScroll({ });
    
    
    
    //loading Screen
    $(window).load(function(){
        
        
        // show the scroll
        $("body").css("overflow","auto");
        
        // select emlent
    $(".overlay .spinner").fadeOut(2000,function()
        {
          
            $(this).parent().fadeOut(1500,function()
        {
            
            $(this).remove();
                
            })
        });
    });
    
    
    
    // pri scrool 
    $(document).scroll(function(){
        console.log($(document).scrollTop());
    })
    
    // navbar
    
   $(window).scroll(function(){
    if ($(document).scrollTop() > 450) {
        $('nav').addClass('shrink');
    }
    else {
        $('nav').removeClass('shrink');
    }
});
    
});