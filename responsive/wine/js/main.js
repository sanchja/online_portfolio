function myFunction(x) {
    x.classList.toggle("change");    
}

$(document).ready(function(){
    
    $('.mobile_nav').on("click",function(){
        $('.mobile_links').toggleClass('open animated fadeIn');
    });
    
})
