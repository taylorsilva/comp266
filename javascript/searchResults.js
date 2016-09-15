/*
	Created by: Taylor Silva
	Requires jQuery 3.1.0
*/

// Loading spinner HTML source: https://codepen.io/jczimm/pen/vEBpoL
var loadingSpinner = '<div class="showbox" id="loadingSpinner">\
  <div class="loader">\
    <svg class="circular" viewBox="25 25 50 50">\
      <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10"/>\
    </svg>\
  </div>\
  <div>Finding Textbooks</div>\
</div>';

// store search result data for when user clicks for more details
var textbooks;

// Make AJAX call to server and display results in table
function loadResults (replaceElement) {
	//will have final html to replace loading with
	var resultsHtml = '<table class="results" id="featuredPost">\
					<tr>\
						<th>Price</th>\
						<th>Title</th>\
						<th>Description</th>\
					</tr>'; 
	// Make AJAX call to get search results which are in JSON format
	var ajaxSearch = $.getJSON('http://student.athabascau.ca/~taylorsi5/phpAJAX/searchResults.php',
						function(data) {
							textbooks = data;
							// Append rows to the table
							$.each(data, function (key, item) {
								resultsHtml +=
								'<tr class="itemRow" data-key="' + key + '">' +
									'<td>$' + item['price'] + '</td>' +
									'<td>' + item['title'] + '</td>' +
									'<td>' + item['description'].substr(0,30) + '</td>' +
								'</td>'
							});

							//Close table
							resultsHtml += '</table>';
							$(replaceElement).replaceWith(resultsHtml);
						});
}

//Bind to submit event for the search form
$('input#submitButton').click(function (event) {
	// animate out the featured posts
	$('#featuredPost').animate({opacity: '0'}, {queue: false, duration: 400, 
		complete: function() {
			// Delete featured post and replace with loading wheel
			$('#featuredPost').replaceWith(loadingSpinner);
		}});
	// Just for show, wait two seconds then replace the loader with search results
	window.setTimeout(function() {loadResults('#loadingSpinner')}, 2000);
});

/* 
	Displaying detailed view of the selected listing/ad
*/

// Display detailed info inside a modal box
$(document).on('click', '.itemRow', function (event){
	// Get details for this listing
	var listing = textbooks[$(this).data('key')];
	// Create HTML to insert
	var modalHtml = '<div id="listingDetails" class="modal">\
					<div class="modal-content">\
					  <div class="modal-header">\
					    <span class="close">x</span>' +
					    '<h2>' + listing['title'] + '</h2>\
					  </div>\
					  <div class="modal-body">\
					    <p>Some text in the Modal Body</p>\
					    <p>Some other text...</p>\
					  </div>\
					</div></div>';
	console.log(modalHtml);
	$('body').prepend(modalHtml);
});

// Close the modal
$(document).on('click', '.close, #listingDetails', function (event){
	$('#listingDetails').remove();
});

