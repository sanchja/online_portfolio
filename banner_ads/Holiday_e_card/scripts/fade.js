$(document).ready(function() {//START OF READY FUNCTION
	
	
		//$("#message").hide().fadeIn(3000);
		$("#green_section").hide().fadeIn(3000);
		$("#wishing").hide().fadeIn(6000);
		
		function skaters(){
		$("#kids1").delay(4000).animate({left:'320px',top:'+=40',opacity:1},2000,'swing');
		//$("#kids2").delay(5000).animate({left:'+=150px', top:'-=45px',opacity:1 },2000,'swing');
		$("#kids3").delay(2000).animate({left:'600px', top:'+=10px', opacity:1},2000, 'swing');	
		$("#kids4").delay(3000).animate({left:'255px',opacity:1},2000,'swing');
		$("#group").delay(5000).animate({left:'400px', top:'450',opacity:1},2000,'swing');
	};
	
	skaters();
	
	
	
});
