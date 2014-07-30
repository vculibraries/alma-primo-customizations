/* 

	VCU Libraries JS add-ons for search
	atinker@vcu.edu
	Updated April 2014

*/

$(document).ready(function(){

  $('body').attr("style", "margin-left: auto !important; margin-right: auto !important;");

	// add instructions to citation linker
    var citationText='<p class="vcul-help-text">Fill in as much of the citation information as you can to connect directly to a specific article, journal, or book.</p>';
    $('div.EXLCitationLinkerHeader').append(citationText);

	// add browse link to advanced
	var browseLink='<div class="EXLSearchFieldRibbonBrowseSearchLink"><a class="EXLSearchFieldRibbonAdvancedTwoLinks" title="Browse Books and Media" href="search.do?fn=showBrowse&amp;mode=BrowseSearch&amp;dscnt=0&amp;fromEshelf=false&amp;fromTop=true&amp;fromPreferences=true&amp;dstmp=1377884473837&amp;menuitem=0&amp;vid=VCU">Browse Books and Media</a></div>';
        $('.EXLBriefDisplay #exlidAdvancedSearchTile.EXLAdvancedSearch #exlidAdvancedSearchRibbon .EXLSearchFieldRibbonFormLinks').append(browseLink);

	// add advanced link to browse
    var advancedLink='<a style="margin-left:20px;" class="EXLSearchFieldRibbonAdvancedTwoLinks" title="Switch to Advanced Search" href="search.do?mode=Advanced&amp;ct=AdvancedSearch&amp;dscnt=0&amp;fromEshelf=false&amp;fromTop=true&amp;fromPreferences=false&amp;dstmp=1377891402235&amp;menuitem=0&amp;vid=VCU" id="advancedSearchBtn">Advanced Search</a>';
	$('#exlidAdvancedSearchTile #exlidAdvancedSearchRibbon.EXLAdvancedBrowseRibbon .EXLSearchFieldRibbonFormLinks').append(advancedLink);

	// clear fix containers
    var clearMain='<div class="clearfix"></div>';
	$('.EXLResultsContainer', '#exlidUserAreaTile').append(clearMain);
	$('#exlidAdvancedSearchRibbon .EXLSearchTabsContainer').append(clearMain);

	// facets sliding drawer
	var openFacets='<a href="#" id="openSidebar">Filter options</a>';
	$('#exlidResultsContainer').prepend(openFacets);

	$('a#openSidebar').click(function(){
		$('#exlidFacetTile').animate({left: "0px"}, 500);
	});

	var closeFacets='<a href="#" id="closeSidebar"></a>';
	$('.EXLFacetContainer h3').after(closeFacets);

	$('a#closeSidebar').click(function(){
		$('#exlidFacetTile').animate({left: "-900px"}, 500);
	});

	// add dropdown menu for tablet view
	var menuDropdown='<a href="#" class="header-dropdown">More search options <span class="icon-arrow-down"></span></a>';
	$('ul#exlidMainMenuRibbon').before(menuDropdown);
		$('a.header-dropdown').click(function(){
		$('ul#exlidMainMenuRibbon').toggleClass('content-visible');
	});

	// show/hide facets
	$('#facetList h4').addClass('show');
	$('h4.EXLFacetTitleLabelPHolderfacet_creationdate').removeClass('show');
	$('.show').nextAll().addClass('hidden');
	$('.show').click(function(){
		$(this).nextAll().toggleClass('hidden');
    $(this).toggleClass('icon-shift');
	});
	$('h4.EXLFacetTitleLabelPHolderfacet_creationdate').click(function(){
		$(this).nextAll().toggleClass('hidden');
	});


// ##########################################################################
// #
// # Primo Date slider fixes & enhancements
// #
// # Copyright 2014 Notre Dame
// #
// # https://github.com/ndlib/primo-date-slider


jQuery(function($) {
  var $dateSubmit, $end, $slider, $sliderURL, $start, addEventHandlers, addYear, getURL, gotoURL, hideLink, maxYear, minYear, padYear, ready, removePreviousDates, restrictKeyPress, restrictKeyUp, showLink, sortNumber, submitEnd, submitStart, updateEnd, updateSlider, updateStart, updateURL, yearIndex, yearValue, years;
  $slider = $('#slider-range');
  if ($slider.length > 0) {
    $sliderURL = $("#sliderURL");
    $start = $('#startdate');
    $end = $('#enddate');
    $dateSubmit = $('#dateSubmit');
    minYear = 1;
    maxYear = new Date().getFullYear();
    years = window.limits;
    removePreviousDates = function() {
      var modifiedURL, nameMatches, originalURL, valueMatches;
      originalURL = $sliderURL.val();
      modifiedURL = originalURL;
      nameMatches = originalURL.match(/fctN=[^&]+&?/g);
      valueMatches = originalURL.match(/fctV=[^&]+&?/g);
      $.each(nameMatches, function(index, nameMatch) {
        var valueMatch;
        if (nameMatch.match(RegExp("=facet_creationdate"))) {
          valueMatch = valueMatches[index];
          modifiedURL = modifiedURL.replace(nameMatch, "");
          modifiedURL = modifiedURL.replace(valueMatch, "");
        }
      });
      return $sliderURL.val(modifiedURL);
    };
    hideLink = function() {
      $dateSubmit.hide();
    };
    showLink = function() {
      $dateSubmit.show();
    };
    getURL = function() {
      var dateString, url;
      showLink();
      url = $sliderURL.val();
      url = url.replace('fctN=xxx', "fctN=facet_creationdate");
      dateString = "fctV=%5b" + (padYear($start.val())) + "+TO+" + (padYear($end.val())) + "%5d";
      url = url.replace('fctV=xxx', dateString);
      return url;
    };
    padYear = function(year) {
      var pad;
      year = '' + year;
      pad = "0000";
      return pad.substring(0, pad.length - year.length) + year;
    };
    updateURL = function() {
      $dateSubmit.attr('href', getURL());
    };
    gotoURL = function() {
      window.location.href = getURL();
    };
    restrictKeyPress = function(event) {
      var keyValue;
      keyValue = String.fromCharCode(event.which);
      if (keyValue && /\D/.test(keyValue)) {
        event.preventDefault();
      }
    };
    restrictKeyUp = function(event) {
      var input, newValue;
      input = $(this);
      newValue = input.val().replace(/\D/g, '');
      if (newValue !== input.val()) {
        input.val(newValue);
      }
    };
    yearValue = function(input) {
      var string;
      string = input.val().replace(/\D/g, '');
      if (string === '') {
        return minYear;
      } else {
        return parseInt(string, 10);
      }
    };
    submitStart = function(event) {
      if (event.which === 13) {
        updateStart();
        return gotoURL();
      }
    };
    submitEnd = function(event) {
      if (event.which === 13) {
        updateEnd();
        return gotoURL();
      }
    };
    updateStart = function(event) {
      var endValue, startValue;
      startValue = yearValue($start);
      endValue = yearValue($end);
      if (startValue < minYear) {
        startValue = minYear;
      } else if (startValue > endValue) {
        startValue = endValue;
      }
      $start.val(startValue);
      return updateSlider();
    };
    updateEnd = function(event) {
      var endValue, startValue;
      startValue = yearValue($start);
      endValue = yearValue($end);
      if (endValue > maxYear) {
        endValue = maxYear;
      } else if (endValue < startValue) {
        endValue = startValue;
      }
      $end.val(endValue);
      return updateSlider();
    };
    yearIndex = function(year) {
      var index;
      year = parseInt(year, 10);
      index = years.indexOf(year);
      if (index === -1) {
        addYear(year);
        index = years.indexOf(year);
      }
      return index;
    };
    sortNumber = function(a, b) {
      return a - b;
    };
    addYear = function(year) {
      years.push(parseInt(year, 10));
      years.sort(sortNumber);
      return $slider.slider("option", "max", years.length - 1);
    };
    updateSlider = function() {
      var endValue, startValue;
      updateURL();
      startValue = yearValue($start);
      endValue = yearValue($end);
      $slider.slider("values", 0, yearIndex(startValue));
      $slider.slider("values", 1, yearIndex(endValue));
      return window.changeTooltipsHeadeValues($slider, startValue, endValue);
    };
    addEventHandlers = function() {
      var $inputs;
      $inputs = $start.add($end);
      $inputs.attr('onblur', '').attr('onkeyup', '');
      $inputs.attr('pattern', '[0-9]*');
      $inputs.keypress(restrictKeyPress);
      $inputs.keyup(restrictKeyUp);
      $inputs.keyup(showLink);
      $inputs.change(updateURL);
      $start.blur(updateStart);
      $end.blur(updateEnd);
      $start.keypress(submitStart);
      $end.keypress(submitEnd);
      return $slider.on("slidestop", updateSlider);
    };
    ready = function() {
      removePreviousDates();
      hideLink();
      return addEventHandlers();
    };
    return $(document).ready(ready);
  }
});