$(function(){ 
	
   //$('.masthead').fadeToggle();
    
    //$('.left').animate({ left: "0", opacity:"1"},1000);
    //$('.right').animate({left: "-450", opacity:"1"},1000);
    //$('div.masthead').addClass('animated zoomIn');
    
    
    
    $('.left_logo').addClass('animated fadeInLeft');
    $('.right_logo').addClass('animated fadeInRight');
    $('.l4s_overlay').animate({opacity:"1"},2500);
    
    
    
    setTimeout(function () {
    
        $('.masthead2').animate({top:"20px"},1200);
        //$('.sub_masthead').addClass('animated fadeIn');        
}, 1000);
    
    setTimeout(function () {
        $('.sub_masthead').addClass('animated fadeIn');
        $('.left').addClass('animated slideInLeft');
        $('.right').addClass('animated slideInRight');
        $('.left').animate({left: "0px", opacity:"1"},1500);
        $('.right').animate({left: "98px", opacity:"1"},1500);
        //$('li img, li').hover(function(){
        //$(this).toggleClass('animated pulse');
       // $(this).stop(true, true).css('opacity', '.8');    
        //},  function() {
           // $(this).stop(true, true).css('opacity', '1');
        //    });
   },2000);  
    
//   $('.slide').on('click', function(){
//        $(this).toggleClass('slide_up');
//        $('.table').slideToggle(1000);
//    });
    
//    $('.lisa').on('click', function(){
//        $('.table2').slideToggle(1000);
//    });
    

    
    $('.marketing, .slide').on('mouseover', function(){
        $(this).css('cursor','pointer');
    });
    
//    $('.marketing').on('click', function(){
//        $(this).toggleClass('marketing_slide_up');
//        $('.table3').slideToggle(1000);
//    });
    
    
$('.l4s_overlay').flare();
 // change color to green
// $('.indent').flare({backgroundColor: '#0f0'}); 
	
    
    

        


});