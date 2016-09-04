/*
	Creaed by: Taylor Silva
*/

// Declaring constants, to be used when setting the listeners
var TYPE_EMAIL = 1;
var TYPE_PRICE = 2;
var TYPE_TEXT = 3;
var TYPE_SCHOOL = 4;
var TYPE_DEPARTMENT = 5;
var TYPE_COURSECODE = 6;


/*
	Main listener function/class? set to listen to each input field in the form
*/
function fieldListener (eventObj, inputType, errorClass, successClass) {
	//console.log(eventObj); // for debugging

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
		// verify through AJAX call back to server
	}

	function verifyDepartment (department) {
		// verify through AJAX call back to server
	}

	function verifyCourseCode (courseCode) {
		// verify through AJAX call back to server
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
				evalInput(verifySchool(eventObj.value));
				break;
			case TYPE_DEPARTMENT:
				evalInput(verifyDepartment(eventObj.value));
				break;
			case TYPE_COURSECODE:
				evalInput(verifyCourseCode(eventObj.value));				
				break;
			default:
				console.log("Unknow input type passed");
				break;
		}
	}

	// run this function!
	main();
}