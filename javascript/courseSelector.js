/*
	Created by: Taylor Silva
	Requires jQuery 3.1.0
*/

// Base ajax object
var ajax = new XMLHttpRequest()
				,method = "GET"
				,url = "http://student.athabascau.ca/~taylorsi5/phpAJAX/searchSelector.php";

function loadSchools () {
	// called once response is returned
	ajax.onreadystatechange = function () {
		if (ajax.status == 200 && ajax.readyState == 4) { 
			var schools = JSON.parse(ajax.responseText);
			// append each school to the select
			$.each(schools, function (key, value) {
				$('#school').append($('<option>', {
									value: key,
									text: schools[key]
				}));
			});
		};
	}

	ajax.open(method, url, true);
	ajax.send();
}

function loadDepartments () {

	ajax.onreadystatechange = function () {
		if (ajax.status == 200 && ajax.readyState == 4) {
			var courses = JSON.parse(ajax.responseText);
			//clear out current options for department
			$('#department').empty();
			// Insert new options for department
			$.each(courses, function (key, value) {
				$('#department').append($('<option>', {
					value: key,
					text: key
				}));
			})
		};
	};

	ajax.open(method, url + '?school=' + $('#school').val(), true);
	ajax.send();
}

function loadCourseCodes () {

	ajax.onreadystatechange = function () {
		if (ajax.status == 200 && ajax.readyState == 4) {
			var coursecodes = JSON.parse(ajax.responseText)[$('#department').val()];
			//clear out current options for department
			$('#courseCode').empty();
			// Insert new options for department
			$.each(coursecodes, function (key, value) {
				$('#courseCode').append($('<option>', {
					value: value,
					text: value
				}));
			})
		};
	};

	ajax.open(method, url + '?school=' + $('#school').val(), true);
	ajax.send();
}

// Load schools into <select> as soon as document is loaded
$(document).ready(function () {
	loadSchools();
});

// Load departments based on the selected school
$(document).on('change', '#school', function (e) {
	loadDepartments();
});

// Load course code based on the selected school
$(document).on('change', '#department', function (e) {
	loadCourseCodes();
});