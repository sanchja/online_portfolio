$(document).ready(function () {
	  
	//var timeTablePDF = new PDFObject({ url: "http://test.pharma.com/i/themes/csapps/ehr/pdf/Butrans_Timetable.pdf" }).embed("#viewfinder");
	
	//DETECT ORIENTATION FUNCTION
	
	function removeLandscape() {
		window.onorientationchange = detectIPadOrientation;
        function detectIPadOrientation() {

            if (orientation === 0) {
                //alert ('Portrait Mode, Home Button bottom');
	            $("body[orient='landscape']");
            } else if (orientation === 90) {
            //alert ('Landscape Mode, Home Button right');
            } else if (orientation === 180) {
            //alert ('Portrait Mode, Home Button top');
	            $("body[orient='landscape']");
            }
        }
	}
	
	
	
// NAVIGATION BUTTONS	/////////////////////////
	
	
	
	//// FAQ BUTTON//////////
	$('#faq').on('click', function (e) {
        window.open = "openpdf:Purdue_Butrans_HelpdeskFAQs.pdf";
    });

	//// TIME TABLE BUTTON///////
	$('#timetable').on('click', function (e) {
		window.open = "openpdf:Butrans_Timetable.pdf";
    });
		
	//// QUICK TIPS BUTTON///////
	$('#quicktips').on('click', function (e) {
		$("#sublinks li").slideToggle();
	});
	
    $("li#eClinical").on('click', function (e) {
        window.open = "openpdf:QTG_AddaDrug_eCW.pdf";
    });
			
    $("li#Epicare").on('click', function (e) {
        window.open = "openpdf:QTG_AddaDrug_Epic.pdf";
    });
			
    $("li#ge").on('click', function (e) {
        window.open = "openpdf:QTG_AddaDrug_GE_Centricity.pdf";
    });
		
    $("li#vitera").on('click', function (e) {
        window.open = "openpdf:QTG_AddaDrug_Vitera.pdf";
    });
		
    $("li#nextGen").on('click', function (e) {
        window.open = "openpdf:QTG_AddaDrugNextGen.pdf";
    });
    
    
    
////////////////////////////////////////////////////////////
    
    //// HYSINGLA FAQ BUTTON//////////
	$('#faqH').on('click', function (e) {
        window.open = "openpdf:Purdue_Butrans_HelpdeskFAQs.pdf";
    });

	////  HYSINGLA TIME TABLE BUTTON///////
	$('#timetableH').on('click', function (e) {
		window.open = "openpdf:Butrans_Timetable.pdf";
    });
		
	//// HYSINGLA QUICK TIPS BUTTON///////
	$('#quicktipsH').on('click', function (e) {
		$("#sublinks2 li").slideToggle();
	});
	
    $("li#eClinical").on('click', function (e) {
        window.open = "openpdf:QTG_AddaDrug_eCW.pdf";
    });
			
    $("li#Epicare").on('click', function (e) {
        window.open = "openpdf:QTG_AddaDrug_Epic.pdf";
    });
			
    $("li#ge").on('click', function (e) {
        window.open = "openpdf:QTG_AddaDrug_GE_Centricity.pdf";
    });
		
    $("li#vitera").on('click', function (e) {
        window.open = "openpdf:QTG_AddaDrug_Vitera.pdf";
    });
		
    $("li#nextGen").on('click', function (e) {
        window.open = "openpdf:QTG_AddaDrugNextGen.pdf";
    });
	
	
	
//////// ANIMATE NAVIGATION
	$("#butrans").on("click",function(){
		$("#dottedlines").fadeToggle(700);
		$("#buttons").fadeToggle(1200);
		//$("#faq").animate({top:"200px", opacity:1}, 1000);
		
		if ($("#buttons2").is(":visible")) {
            $("#buttons2").fadeOut(1000);
        }
        
        if ($("#sublinks li").is(":visible")) {
            $("#sublinks li").fadeOut(1000);
        }
        
        if ($("#sublinks2 li").is(":visible")) {
            $("#sublinks2 li").fadeOut(1000);
        }
    });

    $("#hysingla").on("click", function () {
		$("#dottedlines2").fadeToggle(700);
		$("#buttons2").fadeToggle(1200);
		
		if ($("#buttons").is(":visible")) {
            $("#buttons").fadeOut(1000);
        }
        
        if ($("#sublinks2 li").is(":visible")) {
            $("#sublinks2 li").fadeOut(1000);
        }
        
        if ($("#sublinks li").is(":visible")) {
            $("#sublinks li").fadeOut(1000);
        }
    });
	
	
///// DONE BUTTON	
	if ($("button.doneBtn").length > 0) {
        $(".doneBtn").css("display", "none");
    }
	
	$('button.doneBtn').on('click', function (e) {
		//window.location.reload(true) = "index.html";
	});
});