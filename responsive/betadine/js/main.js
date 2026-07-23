$( document ).ready(function() {

$( "div.search img" ).click(function() {
    //alert($( this ).css( "transform" ));
    if (  $( "div.search" ).css( "transform" ) == 'none' ){
        $("div.search").css("transform","translate(-170px)");
   
    }
});

//var testvideo = document.getElementById("splash");
    		//testvideo.play();
		/*var windowSize = $(window).width();
		var $splash = $("#splash")
		var $bottle = $("#largeBottle")
		var $caption = $("#caption")
		
		var $splashHCP = $("#splashHCP")
        var $bottleHCP = $("#largeBottleHCP")
		var $captionHCP = $("#captionHCP")
		
		var $splashMSD = $("#splashMSD")
        var $bottleMSD = $("#largeBottleMSD")
		var $captionMSD = $("#captionMSD")*/

	

   

    
    
    
    if ( $(window).width() <= 768) {     
		/*$("#mainNav").css("display","none");*/
  		$("a.blank").on("click", function(event){
			event.preventDefault();
   		
		$("#mainNav li").slideToggle(300);
		$(this).toggleClass("blankMinus");
		
		//$("#large").css("display", "none");
		//$("#small").css("display", "block");
		/*$("#consumers").slideToggle('fast');
		$("#hcp").slideToggle('fast');
		$("#msd").slideToggle('fast');*/
		});
		}
			

    //$(".video").playVideo();
	//$("#splash").playVideo(".video");



$(".retail a, .external_links a").on("click",function(){
	if (!confirm("You are leaving the Betadine® website. Purdue accepts no responsibility for any of the content of the linked site and does not endorse the site. Do you wish to leave the Betadine® website.?")){
        return false;
    }
})


}); // END OF DOCUMENT READY FUNCTION