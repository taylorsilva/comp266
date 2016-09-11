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

//Bind to submit event for the search form
$("#searchForm").submit(function (event) {
	// Delete featured post and replace with loading wheel
	$("#featuredPost").replaceWith(loadingSpinner);
});