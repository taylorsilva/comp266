/*
	Creaed by: Taylor Silva

	How To Use:
	To use this form validator, simply set a listener on the input you want to validate
	and call the fieldListener() function

	Example:
	document.querySelector("[CSS Selector here]").addEventListener("[input/change]", function(e) {
    	fieldListener(e.target, TYPE_[from constants], "errorClass", "successClass");
	}, false);

	- for the querySelector, I'd suggest using an #id if you want to reference a specific element
	- errorClass and successClass are class names that you can specify in your CSS sheet. You can
		use any name you want really
	- you can set the listener to be called during 'input' or 'change', those work best for most 
		browsers
*/

// Declaring inputType constants, to be used when setting the listeners
var TYPE_EMAIL = 1;
var TYPE_PRICE = 2;
var TYPE_TEXT = 3;
var TYPE_SCHOOL = 4;
var TYPE_DEPARTMENT = 5;
var TYPE_COURSECODE = 6;


/*
	Main listener function/class set to listen to each input field in the form
	eventObj: 	Handle to the element this listener is set to
	inputType: 	One of the above constants
	errorClass: A css class to set the eventObj to if input is invalid
	successClass: A css class to set the eventObj to if input is valid
*/
function fieldListener (eventObj, inputType, errorClass, successClass) {
	//console.log(eventObj); // for debugging

	// AJAX variables
	var ajax = new XMLHttpRequest()
				,method = "GET"
				,url = "http://student.athabascau.ca/~taylorsi5/phpAJAX/formValidator.php"; // hard-coded the URL so it's easier to test on my local machine

	// called once response is returned to set the class
	ajax.onreadystatechange = function () {
		if (ajax.status == 200) { // Ensure HTTP status has returned OK 
			evalInput(ajax.responseText);
		};
	}

	/*
		Private Helper functions
	*/

	// Set class of the given element
	function setClass (element, className) {
		element.className = className;
	}

	// evals a boolean function and sets its elements class accordingly 
	function evalInput(inputValue) {
		if (inputValue) {
			setClass(eventObj, successClass);
		} else {
			setClass(eventObj, errorClass);
		};
	}

	/*
		Individual input verification functions
		returns boolean
	*/

	// verify that an email address has been provided
	function verifyEmail (emailAddress) {
		var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailRegex.test(emailAddress);
	}

	// verify that a price has been entered
	function verifyPrice (price) {
		// remove dollar sign, if inserted
		price = price.replace("$", "");
		// verify that an number has been entered
		return !isNaN(price);
	}

	// verify that text has been entered
	function verifyInputText (inputText) {
		if (inputText != "") {
			return true;
		} else {
			return false;
		};
	}

	function verifySchool (school) {
		ajax.open(method, url + "?school=" + school, true);
		ajax.send();
	}

	function verifyDepartment (department) {
		ajax.open(method, url + "?department=" + department, true);
		ajax.send();
	}

	function verifyCourseCode (courseCode) {
		ajax.open(method, url + "?coursecode=" + courseCode, true);
		ajax.send();
	}

	/*
	*	End of input verification functions
	*/

	// main function for this class?... javascript conventions are weird...
	function main() {
		switch (inputType) {
			case TYPE_EMAIL:
				evalInput(verifyEmail(eventObj.value));
				break;
			case TYPE_PRICE:
				evalInput(verifyPrice(eventObj.value));
				break;
			case TYPE_TEXT:
				evalInput(verifyInputText(eventObj.value));
				break;
			case TYPE_SCHOOL:
				// Due to AJAX call, must implement evalInput in ajax.onreadystatechange()
				verifySchool(eventObj.value);
				break;
			case TYPE_DEPARTMENT:
				verifyDepartment(eventObj.value);
				break;
			case TYPE_COURSECODE:
				verifyCourseCode(eventObj.value);
				break;
			default:
				console.log("Unknow input type passed");
				break;
		}
	}

	// run this function!
	main();
}