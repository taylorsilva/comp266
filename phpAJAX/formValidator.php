<?php
// so I can dev from my local machine
header('Access-Control-Allow-Origin: *');  

// Arrays that contain valid inputs
$school = array("athabasca", "mcmaster", "waterloo", "uoft", "ubc");
$department = array("arts", "science", "compsci", "business", "english");
$courseCode = array("1AB3", "2AB3", "3AK3", "2EN3");

// simply check if input is found in array, return result
if (isset($_GET['school'])) {
	if (in_array($_GET['school'], $school)) {
		echo "true";
	} else {
		echo "false";
	}
	
}

if (isset($_GET['department'])) {
	if (in_array($_GET['department'], $department)) {
		echo "true";
	} else {
		echo "false";
	}
}

if (isset($_GET['coursecode'])) {
	if (in_array($_GET['coursecode'], $courseCode)) {
		echo "true";
	} else {
		echo "false";
	}
}

?>