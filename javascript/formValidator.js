/*
	Creaed by: Taylor Silva
*/

// Declaring constants, to be used when setting the listeners
var TYPE_FNAME = 0;
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

	// Verify that a name has been entered
	function verifyFName (element) {
		if (element.value != "") {
			return true;
		} else {
			return false;
		};
	}

	// verify that an email address has been provided
	function verifyEmail (element) {
		// body...
	}

	// verify that a price has been entered
	function verifyPrice (element) {
		// body...
	}

	// verify that text has been entered
	function verifyInputText (element) {
		if (element.value != "") {
			return true;
		} else {
			return false;
		};
	}

	function verifySchool (element) {
		// verify through AJAX call back to server
	}

	function verifyDepartment (element) {
		// verify through AJAX call back to server
	}

	function verifyCourseCode (element) {
		// verify through AJAX call back to server
	}

	/*
	*	End of input verification functions
	*/

	// main function for this class?... javascript conventions are weird...
	function main() {
		switch (inputType) {
			case TYPE_FNAME:
				evalInput(verifyFName(eventObj));
				break;
			case TYPE_EMAIL:
				evalInput(verifyFName(eventObj));
				break;
			case TYPE_PRICE:
				evalInput(verifyFName(eventObj));
				break;
			case TYPE_TEXT:
				evalInput(verifyFName(eventObj));
				break;
			case TYPE_SCHOOL:
				evalInput(verifyFName(eventObj));
				break;
			case TYPE_DEPARTMENT:
				evalInput(verifyFName(eventObj));
				break;
			case TYPE_COURSECODE:
				evalInput(verifyFName(eventObj));				
				break;
			default:
				console.log("Unknow input type passed");
				break;
		}
	}

	// run this function!
	main();
}