<?php
header('Access-Control-Allow-Origin: *');
$masterTextbookList = array('01' => array('id' => '01',
										'fName' => 'Jack',
										'title' => 'English Basics',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'02' => array('id' => '02',
										'fName' => 'Betty',
										'title' => 'Math Basics',
										'price' => '35',
										'description' => 'Mostly new and in great condition. Some highlighting',
										'photos' => 'textbook.jpg'), 
					'03' => array('id' => '03',
										'fName' => 'Carl',
										'title' => 'Spanish Basics',
										'price' => '35',
										'description' => 'Including my class notes with the textbook.',
										'photos' => 'textbook.jpg'), 
					'04' => array('id' => '04',
										'fName' => 'Mary',
										'title' => 'Adanvced Math',
										'price' => '35',
										'description' => 'Three year old edition but the professor still uses the old versions as well as the new ones.',
										'photos' => 'textbook.jpg'), 
					'05' => array('id' => '05',
										'fName' => 'Venkatesh',
										'title' => 'Advanced Physics 101',
										'price' => '35',
										'description' => 'Newest edition! In mint condition!',
										'photos' => 'textbook.jpg'), 
					'06' => array('id' => '06',
										'fName' => 'Ipsita',
										'title' => 'Mechanical Engineering',
										'price' => '35',
										'description' => 'mint condition with some highlighting',
										'photos' => 'textbook.jpg'), 
					'07' => array('id' => '07',
										'fName' => 'Bayezin',
										'title' => 'Electrical Engineering 101',
										'price' => '35',
										'description' => 'Including the problem sets and answers for the course',
										'photos' => 'textbook.jpg'), 
					'08' => array('id' => '08',
										'fName' => 'Dilani',
										'title' => 'Intro to Human Anatomy',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'09' => array('id' => '09',
										'fName' => 'Rohit',
										'title' => 'Finance: Real Estate',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'10' => array('id' => '10',
										'fName' => 'Jonathan',
										'title' => 'Advanced Accounting',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'11' => array('id' => '11',
										'fName' => 'Danielle',
										'title' => 'Advanced Biology',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'12' => array('id' => '12',
										'fName' => 'Charles',
										'title' => 'Psychology 101',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'13' => array('id' => '13',
										'fName' => 'Vinita',
										'title' => 'Intro to Canadian Law',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'14' => array('id' => '14',
										'fName' => 'Conrad',
										'title' => 'Intro to Mandarin',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'15' => array('id' => '15',
										'fName' => 'Lindsey',
										'title' => 'Aboriginal Life Studies',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'16' => array('id' => '16',
										'fName' => 'Sushen',
										'title' => 'Intro to Canadian Accounting',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'17' => array('id' => '17',
										'fName' => 'Gwynneth',
										'title' => 'Business Policy',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'18' => array('id' => '18',
										'fName' => 'Alex',
										'title' => 'Intro to Database Administration',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'19' => array('id' => '19',
										'fName' => 'Preetjot',
										'title' => 'Basics of Finance',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'20' => array('id' => '20',
										'fName' => 'Kala',
										'title' => 'Intro to Human Resources',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'21' => array('id' => '21',
										'fName' => 'Terry',
										'title' => 'Intro to Data Structures',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'22' => array('id' => '22',
										'fName' => 'Judy',
										'title' => 'Intro to Business Policy',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'23' => array('id' => '23',
										'fName' => 'William',
										'title' => 'Advanced Database Design',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'24' => array('id' => '24',
										'fName' => 'Monika',
										'title' => 'Intro to Psych',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'25' => array('id' => '25',
										'fName' => 'Duy',
										'title' => 'Intro to Algorithms',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'26' => array('id' => '26',
										'fName' => 'Jeffery',
										'title' => '3D Video Game Modelling',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'27' => array('id' => '27',
										'fName' => 'Michelle',
										'title' => 'Human Resource Management',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'28' => array('id' => '28',
										'fName' => 'Shan',
										'title' => 'Basics of Project Management',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'29' => array('id' => '29',
										'fName' => 'Judy',
										'title' => 'How to be a Manager 101',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg'), 
					'30' => array('id' => '30',
										'fName' => 'Emily',
										'title' => 'International Corporate Law',
										'price' => '35',
										'description' => 'Last years edition.',
										'photos' => 'textbook.jpg') 

	);
?>