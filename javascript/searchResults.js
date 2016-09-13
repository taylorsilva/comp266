/*
	Created by: Taylor Silva
	Requires jQuery
*/

// Loading spinner HTML source: https://codepen.io/jczimm/pen/vEBpoL
var loadingSpinner = '<div class="showbox">\
  <div class="loader">\
    <svg class="circular" viewBox="25 25 50 50">\
      <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10"/>\
    </svg>\
  </div>\
  <div>Finding Textbooks</div>\
</div>';

// Make AJAX call to server and display results in table
function loadResults () {
	// Make AJAX call
	$.ajax('http://student.athabascau.ca/~taylorsi5/phpAJAX/searchResults.php');
}

//Bind to submit event for the search form
$("input#submitButton").click(function (event) {
	// animate out the featured posts
	$("#featuredPost").animate({opacity: "0"}, {queue: false, duration: 400, 
		complete: function() {
			// Delete featured post and replace with loading wheel
			$("#featuredPost").replaceWith(loadingSpinner);
		}});
	// Just for show, wait two seconds then replace the loader with search results
	window.setTimeout(loadResults, 2000);
});