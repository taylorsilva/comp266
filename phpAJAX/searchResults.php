<?php
// This is all dummy data just to proof-of-concept my textbook website


include 'textbooks.php'; // includes master list of fake textbook listings

// create random list of textbook listings
$ranTextbookKeys = array_rand($masterTextbookList, 10);

// Create new array from the 10 randomly selected keys
$textbooks = array();
foreach ($ranTextbookKeys as $key => $value) {
	// $value contains the textbook ID
	$textbooks[$value] = $masterTextbookList[$value];
}

print(json_encode($textbooks));

?>