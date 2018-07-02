//$(document).ready(function() {
    
    
    var viewer = document.getElementsByClassName("viewer"); // HANDLER FOR THE MEDIA BOX

    $("#sidebar_links").on("click",function(){
	//$(viewer).css("background-image","none");
	$(viewer).html('<a href="ipad_apps/ehr_production/index.html" target="_blank"><img src="img/ehr.png" width="400" alt="Electronic Health Records"/> </a>').addClass('animated lightSpeedIn');
        
        
	});


//});
