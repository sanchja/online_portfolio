// SIDE NAVIGATION ACCORDION BEHAVIOR

// CONDITIONAL ARROW ON NAVIGATION
// let sidebarNav = document.querySelector('ul');
// let overlayBottom = document.querySelector('overlay-bottom');
// console.dir(sidebarNav);
// if(sidebarNav.scrollHeight >= 540) {
//   overlayBottom.style.display = "block";
// }else {
//   // overlayBottom.style.display = "none";
// }

// CODE BELOW IS JUST FOR ONLINE TESTING - SHOWS ENTIRE INTERNAL HTML PAGE ON TOGGLE VIA THE LENTILS ON THE UPPER LEFT HAND CORNER
let main = document.querySelector("main");
let toggle = document.querySelector("#toggle");
let arrow = document.querySelector(".overlay-bottom");

var isOpen = false;

toggle.addEventListener('click', function() {
    if (isOpen) {
      hide();  
    } else {
      show();
    }
  }, false);

function show(){
    main.style.height = "7000px";
    isOpen = true;
    arrow.style.display = "none";
}
function hide(){
    main.style.height = "650px";
    isOpen = false;
    arrow.style.display = "block";
}

  // Nav menu selectors 
  const overlayBottom = $('.overlay-bottom'); 
  const navHeaders = $('.nav > li');
  const dropDowns = $('ul.inner'); 
  const subNavLi = $('ul.inner > li');
  const subNavAnchor = $('ul.inner > li > a');

  // Menu Arrow 
  function showOverlay() { overlayBottom.css('display','block'); }
  function hideOverlay() { overlayBottom.css('display','none'); }

  // Render nav menu
  function renderNavMenu(target,navLi,clicked) { 
    // Variables 
    const dropDown = navLi.find("ul.inner"); 
    const isActive = navLi.hasClass("active"); 
    const hasDropdown = navLi.find('a.toggle').length !== 0;
    const isOpen = dropDown.hasClass("show"); 
    const isSubNav = target.parents('ul.inner').length !== 0; 
    // Helper functions 
    function showDropdown() { 
      dropDown.addClass("show").slideDown(350);
      showOverlay();
     }
    function hideDropdown() { 
      dropDown.removeClass("show").slideUp(350); 
      hideOverlay(); 
    }
    // Main nav logic
    if (isActive) {
      if (hasDropdown) { 
        // Close dropdown if directly clicked and target is not sub nav
        if (isOpen && clicked & !isSubNav) hideDropdown();
         else showDropdown();  
      } 
    } else { 
        // Reset main nav
        navHeaders.removeClass('active'); 
        dropDowns.slideUp(350);
        // Active main nav
        navLi.addClass('active'); 
        hasDropdown ? showDropdown() : hideDropdown() ; 
    }
    // Reset subnav
    subNavAnchor.removeClass("active");
    subNavLi.removeClass("active"); 
    // Sub nav logic
    if (isSubNav) {
      // Click target can be <a> or <span
      var selector = target.is(subNavAnchor) ? target : target.parent('a'); 
      selector.addClass("active"); 
      selector.parent('li').addClass("active"); 
    }
  } 

  // Set nav
  function setClickNav() { 
    $('.nav > li').click(function(e){ 
      const target = $(e.target); 
      const navLi = $(this);
      menuClicked = true;
      renderNavMenu(target,navLi,true); 
    }) 
  } 

// Navigation bar tracking

// Flag to prevent renderMenuAfterScroll() when user clicks on navigation
let menuClicked = false;

function navBarTracking() {
  createPositionMappings();
  renderMenuAfterScroll(); 
}

var positionMappings = [],
    positionOrder = []; 

// Create position mappings 
function createPositionMappings() { 
  $('.nav-marker').each(function(){ 
    var id = $(this).attr('id'); 
    var position = $(this).offset().top; 
    positionMappings.push({
      id: id, 
      position: position
    });
    positionOrder.push(position);
  }) 
}

// Get active position
function getSectionPosition(scrollPosition){ 
  const offset = $('main').offset().top + 10;
  return Math.max.apply(null, positionOrder.filter(function(position){
    return position <= scrollPosition + offset
  }))
} 

// Reference position to mappings
function getActiveSection() {
  var positionValue = getSectionPosition($('main').scrollTop()); 
  for (const section of positionMappings) { 
    if (positionValue === section.position ) {
      return section.id;
    } 
  };
}

// Rerender nav menu after scrolling stops 
function renderMenuAfterScroll() { 
  $('main').scroll(function() {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
      if (menuClicked === true) {
        menuClicked = false;
        return;
      }
      // Pass results of getActiveSection() to renderNavMenu();
      var activeSection = getActiveSection(); 
      const activeAnchor = $("#toc a[href*="+activeSection+"]"[0]);
      const isMainNav = activeAnchor.parent('li').parent('ul#toc').length === 1;
      var navLi = isMainNav 
        ? activeAnchor.parent('li') 
        : activeAnchor.parent('li').parent('ul.inner').parent('li')
      renderNavMenu(activeAnchor,navLi,false)
    }, 500));
  }); 
}

// Search functionality

// Match nodes + positions 
var matches = [];
var selections = [];
var searchPosition = 0;

// X button 
function resetSearch() {
  matches = [];
  selections = [];
  searchPosition = 0;
}

// Empty search
function emptySearch() {
  search(''); 
  $('#search').val("");
  $('.count').html("0/0");
}

// Get search matches + add/remove highlights 
function search(searchValue, color="yellow") { 
  if (color!="transparent") {
    search(document.getElementById('search-hide').value,"transparent"); 
    document.getElementById('search-hide').value = searchValue; 
  } 
  if (window.find && window.getSelection) {
      document.designMode = "on";
      var sel = window.getSelection();
      sel.collapse(document.body, 0); 
      resetSearch();
      highlightMatches(searchValue,color,sel) 
      setInitialSearchPosition();
      document.designMode = "off";
  } 
} 

// Highlight Matches 
function highlightMatches(searchValue,color,selection) {
  while (window.find(searchValue)) {
      document.execCommand("HiliteColor", false, color);
      selection.collapseToEnd(); 
      if (color==="yellow") {
        storeMatch(selection.anchorNode.parentNode);
      }
  }

  // Remove highlight for matches in nav menu + header
  $('ul.nav li a span').each(function(index,element){
    $(element).css('background-color','transparent'); 
  })
  $('h1#fpi span').css('background-color','transparent');
}

// Store position and node of match
function storeMatch(matchParentNode) {
  var offset = 300;
  position = $(matchParentNode).offset().top + $('main').scrollTop() - offset; 
  // Exclude matches from nav menu + header
  if( $(matchParentNode).parents('.nav').length ||
      $(matchParentNode).hasClass('container') ||
      $(matchParentNode).parents('.container').length  ) {
    return;
  }
  else { 
    matches.push(position);
    selections.push(matchParentNode);
  }
}

// Set initial search position 
function setInitialSearchPosition() {
  // Return for empty input value
  if (matches.length === 0) return;
  // Get match closest to scroll offset to set start position 
  var scrollPosition = $('main').scrollTop();
  var closest = matches.reduce(function(prev,curr,index) {
    return (Math.abs(curr - scrollPosition) < Math.abs(prev - scrollPosition) ? curr : prev);
  });
  searchPosition = matches.indexOf(closest); 
  goToMatch(searchPosition); 
} 

function goToMatch(orientation) {
  // Next/Previous Functionality 
  if (orientation === "next") {
    if (searchPosition === matches.length - 1) {
      searchPosition = 0;
    } else searchPosition++;
  }
  if (orientation === "previous") {
    if (searchPosition === 0) {
      searchPosition = matches.length -1;
    } else searchPosition--; 
  } 
  // Set/Reset highlight colors
  $(selections).each(function(index,element){
    $(element).css('background-color','yellow'); 
  })
  $(selections[searchPosition]).css('background-color','orange');
  // Scroll to target
  $('main').scrollTop(matches[searchPosition]); 
  // Update count read out
  $('.count').html(searchPosition+1+"/"+matches.length);
} 

var searchOpen = $('#search-tray').css('display') === 'flex'; 

// Open search tray + go to next match when "enter" key is pressed
function searchKeyboardInput() { 
  var value = $('#search').val(); 
  var searchTray = $('#search-tray');
  var trayClosed = searchTray.css('display') === "none";
  if (trayClosed) {
    searchTray.css('display','flex');
    searchTray.removeClass('hidden-important'); 
    search(value); 
  }
  else $('.next').click();
}

$(document).ready(function(){
  // Empty Search
  $('.empty').click(function(){
    emptySearch(); 
  })
  // Run Search 
  $('.run').click(function(){
    search($('#search').val()); 
  }) 
  // Previous Match
  $('.previous').click(function(){
    goToMatch("previous");
  })
  // Next Match
  $('.next').click(function(){ 
    goToMatch("next");
  }) 
  // Toggle search tray by clicking on magnifying class 
  $('#search-mag').click(function(){
    $('#search-tray').toggleClass("hidden-important");
  })

  // Prevent search on "enter" 
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      searchKeyboardInput();
      return false;
    }
  });

  // Initialize Nav Menu + Tracking 
  setClickNav();
  navBarTracking();

})