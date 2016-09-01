/*
	Creaed by: Taylor Silva
*/

// Declaring constants first
var TYPE_FNAME = 0;
var TYPE_EMAIL = 1;
var TYPE_PRICE = 2;
var TYPE_TEXT = 3;
var TYPE_SCHOOL = 4;
var TYPE_DEPARTMENT = 5;
var TYPE_COURSECODE = 6;


/*
	Main listener function/class? set to each input field in the form
*/
function fieldListener (event, inputType, errorClass, successClass) {

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
			setClass(event.target, successClass);
		} else {
			setClass(event.target, errorClass);
		};
	}

	/*
		Individual input verification functions
		Return boolean
	*/

	// Verify that a name has been entered
	function verifyFName (element) {
		// body...
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
		// body...
	}

	function verifySchool (element) {
		// body...
	}

	function verifyDepartment (element) {
		// body...
	}

	function verifyCourseCode (element) {
		// body...
	}

	// main function for this class?... javascript conventions are weird...
	function main() {
		switch (inputType) {
			case TYPE_FNAME:
				evalInput(verifyFName(event.target));
				break;
			case TYPE_EMAIL:
				evalInput(verifyFName(event.target));
				break;
			case TYPE_PRICE:
				evalInput(verifyFName(event.target));
				break;
			case TYPE_TEXT:
				evalInput(verifyFName(event.target));
				break;
			case TYPE_SCHOOL:
				evalInput(verifyFName(event.target));
				break;
			case TYPE_DEPARTMENT:
				evalInput(verifyFName(event.target));
				break;
			case TYPE_COURSECODE:
				evalInput(verifyFName(event));				
				break;
			default:
				console.log("Unknow input type passed");
				break;
		}
	}

	main();
}