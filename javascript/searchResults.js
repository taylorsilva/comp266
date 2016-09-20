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
									'<td>' + item['description'].substr(0,30) + '...</td>' +
								'</td>'
							});

							//Close table
							resultsHtml += '</table>';
							$(replaceElement).replaceWith(resultsHtml);
						});
}

//Bind to submit event for the search form
$('#searchForm').submit(function (event) {
	// animate out the featured posts
	$('#featuredPost').animate({opacity: '0'}, {queue: false, duration: 400, 
		complete: function() {
			// Delete featured post and replace with loading wheel
			$('#featuredPost').replaceWith(loadingSpinner);
		}});
	// Just for show, wait two seconds then replace the loader with search results
	window.setTimeout(function() {loadResults('#loadingSpinner')}, 2000);
	// stop form from doing GET request
	event.preventDefault();
});

/* 
	Displaying detailed view of the selected listing/ad
*/

function getNewPrice (isbn) {
	var ajax = new XMLHttpRequest()
				,method = "GET"
				,url = "http://student.athabascau.ca/~taylorsi5/phpAJAX/booksrun.php?isbn=" + isbn;

	// call back function that returns result
	ajax.onreadystatechange = function () {
		if (ajax.status == 200 && ajax.readyState == 4) {
			var result = JSON.parse(ajax.responseText);
			if (result.result.status == 'success') { // We got data to process!
				var data = result.result.text // stores the possible prices to display
				// test New, Good, Average, and display the first one that returns a price
				if (data.New.Buy != 'Not available') {
					$('#priceOfNew').append(data.New.Buy);
				} else if (data.Good.Buy != 'Not available') {
					$('#priceOfNew').append(data.Good.Buy);
				} else if (data.Average.Buy != 'Not available') {
					$('#priceOfNew').append(data.Average.Buy);
				} else {
					// do nothing
				};
			};
		};
	};

	ajax.open(method, url, true);
	ajax.send();
}

// Display detailed info inside a modal box
$(document).on('click', '.itemRow', function (event){
	// Get details for this listing
	var listing = textbooks[$(this).data('key')];
	// Get pricing details for comparison 
	var priceOfNew = getNewPrice(listing['isbn']);
	// Create HTML to insert
	var modalHtml = '<div id="listingDetails" class="modal">\
					<div class="modal-content">\
					  <div class="modal-header">\
					    <span class="close">x</span>' +
					    '<h2>' + listing['title'] + '</h2>\
					  </div>\
					  <div class="modal-body">\
					  <img src="' + listing['photo'] +
					  '" alt="Image of ' + listing['title'] + '">' +
					  '<p>Seller: ' + listing['fName'] + '</p>' +
					  '<p>Seller\'s Price: $' + listing['price'] + '</p>' +
					  '<p id="priceOfNew">Price of a New Textbook: $</p>' +
					  '<p>Description: ' + listing['description'] + '</p>' +
					  //Form used to submit message to the seller
					  '<form action="#" id="messageSeller">\
					  	<label for="firstname">First Name</label> <br>\
						<input type="text" name="firstName" id="firstName" required aria-required="true"> <br>\
						<label for="email">Email</label> <br>\
						<input type="text" name="email" id="email" required aria-required="true"> <br>\
						<label for="message">Message</label> <br>\
						<textarea name="message" rows="6" cols="30" id="message" required aria-required="true"></textarea> <br>\
						<input type="submit" value="Message Seller" class="button" style="clear:both;">\
					  </form>' +
					  '</div>\
					</div></div>';
	$('body').prepend(modalHtml);
});

// Close the modal
$(document).on('click', '.close, #listingDetails', function (event){
	if ($(event.target).hasClass('close') | $(event.target).hasClass('modal')) {
		$('#listingDetails').remove();
	};
});

// Message Seller form validation listeners
$(document).on('input', '#firstName', function (e) {
	fieldListener(e.target, TYPE_TEXT, "errorClass", "successClass");
});
$(document).on('input', '#email', function (e) {
	fieldListener(e.target, TYPE_EMAIL, "errorClass", "successClass");
});
$(document).on('input', '#message', function (e) {
	fieldListener(e.target, TYPE_TEXT, "errorClass", "successClass");
});