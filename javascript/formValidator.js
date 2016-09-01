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
	Helper functions
*/

// Set class of the given element
function setClass (element, className) {
	// body...
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


/*
	Main listener function set to each input field in the form
*/
function fieldListener (event, inputType, errorClass, successClass) {
	switch (inputType) {
		case TYPE_FNAME:
			if (verifyFName(event.target)) {
				setClass(event.target, successClass);
			} else {
				setClass(event.target, errorClass);
			};
			break;
		case TYPE_EMAIL:
			if (verifyFName(event.target)) {
				setClass(event.target, successClass);
			} else {
				setClass(event.target, errorClass);
			};
			break;
		case TYPE_PRICE:
			if (verifyFName(event.target)) {
				setClass(event.target, successClass);
			} else {
				setClass(event.target, errorClass);
			};
			break;
		case TYPE_TEXT:
			if (verifyFName(event.target)) {
				setClass(event.target, successClass);
			} else {
				setClass(event.target, errorClass);
			};
			break;
		case TYPE_SCHOOL:
			if (verifyFName(event.target)) {
				setClass(event.target, successClass);
			} else {
				setClass(event.target, errorClass);
			};
			break;
		case TYPE_DEPARTMENT:
			if (verifyFName(event.target)) {
				setClass(event.target, successClass);
			} else {
				setClass(event.target, errorClass);
			};
			break;
		case TYPE_COURSECODE:
			if (verifyFName(event)) {
				setClass(event.target, successClass);
			} else {
				setClass(event.target, errorClass);
			};
			break;
		default:
			console.log("Unknow input type passed");
			break;
	}
}