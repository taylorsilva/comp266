<?php
header('Access-Control-Allow-Origin: *');
$masterTextbookList = array('01' => array('id' => '01',
										'fName' => 'Jack',
										'title' => 'English Basics',
										'price' => '40',
										'description' => 'Last years edition.',
										'photo' => 'textbook.png'), 
					'02' => array('id' => '02',
										'fName' => 'Betty',
										'title' => 'Math Basics',
										'price' => '35',
										'description' => 'Mostly new and in great condition. Some highlighting',
										'photo' => 'textbook.png'), 
					'03' => array('id' => '03',
										'fName' => 'Carl',
										'title' => 'Spanish Basics',
										'price' => '80',
										'description' => 'Including my class notes with the textbook.',
										'photo' => 'textbook.png'), 
					'04' => array('id' => '04',
										'fName' => 'Mary',
										'title' => 'Adanvced Math',
										'price' => '78',
										'description' => 'Three year old edition but the professor still uses the old versions as well as the new ones.',
										'photo' => 'textbook.png'), 
					'05' => array('id' => '05',
										'fName' => 'Venkatesh',
										'title' => 'Advanced Physics 101',
										'price' => '48',
										'description' => 'Newest edition! In mint condition!',
										'photo' => 'textbook.png'), 
					'06' => array('id' => '06',
										'fName' => 'Ipsita',
										'title' => 'Mechanical Engineering',
										'price' => '40',
										'description' => 'mint condition with some highlighting',
										'photo' => 'textbook.png'), 
					'07' => array('id' => '07',
										'fName' => 'Bayezin',
										'title' => 'Electrical Engineering 101',
										'price' => '35',
										'description' => 'Including the problem sets and answers for the course',
										'photo' => 'textbook.png'), 
					'08' => array('id' => '08',
										'fName' => 'Dilani',
										'title' => 'Intro to Human Anatomy',
										'price' => '45',
										'description' => 'Sorry but theres a lot of highlighting in my textbook :(',
										'photo' => 'textbook.png'), 
					'09' => array('id' => '09',
										'fName' => 'Rohit',
										'title' => 'Finance: Real Estate',
										'price' => '35',
										'description' => 'No highlighting or notes',
										'photo' => 'textbook.png'), 
					'10' => array('id' => '10',
										'fName' => 'Jonathan',
										'title' => 'Advanced Accounting',
										'price' => '35',
										'description' => 'Bought just last year, prof is using this version again',
										'photo' => 'textbook.png'), 
					'11' => array('id' => '11',
										'fName' => 'Danielle',
										'title' => 'Advanced Biology',
										'price' => '25',
										'description' => 'Last years edition.',
										'photo' => 'textbook.png'), 
					'12' => array('id' => '12',
										'fName' => 'Charles',
										'title' => 'Psychology 101',
										'price' => '35',
										'description' => 'Unused and in mint condition. Switched out of the course',
										'photo' => 'textbook.png'), 
					'13' => array('id' => '13',
										'fName' => 'Vinita',
										'title' => 'Intro to Canadian Law',
										'price' => '42',
										'description' => 'Selling classnotes as well',
										'photo' => 'textbook.png'), 
					'14' => array('id' => '14',
										'fName' => 'Conrad',
										'title' => 'Intro to Mandarin',
										'price' => '65',
										'description' => 'This textbook is good, I got some smaller conversation books that are helpful too',
										'photo' => 'textbook.png'), 
					'15' => array('id' => '15',
										'fName' => 'Lindsey',
										'title' => 'Aboriginal Life Studies',
										'price' => '40',
										'description' => 'Mint condition, latest edition',
										'photo' => 'textbook.png'), 
					'16' => array('id' => '16',
										'fName' => 'Sushen',
										'title' => 'Intro to Canadian Accounting',
										'price' => '30',
										'description' => 'Mint condition and including class notes and practices tests',
										'photo' => 'textbook.png'), 
					'17' => array('id' => '17',
										'fName' => 'Gwynneth',
										'title' => 'Business Policy',
										'price' => '55',
										'description' => 'Including custom courseware',
										'photo' => 'textbook.png'), 
					'18' => array('id' => '18',
										'fName' => 'Alex',
										'title' => 'Intro to Database Administration',
										'price' => '70',
										'description' => 'Three years old but the edition hasn\'t changed',
										'photo' => 'textbook.png'), 
					'19' => array('id' => '19',
										'fName' => 'Preetjot',
										'title' => 'Basics of Finance',
										'price' => '56',
										'description' => 'Near mint condition, no highlighting',
										'photo' => 'textbook.png'), 
					'20' => array('id' => '20',
										'fName' => 'Kala',
										'title' => 'Intro to Human Resources',
										'price' => '18',
										'description' => 'Last years edition.',
										'photo' => 'textbook.png'), 
					'21' => array('id' => '21',
										'fName' => 'Terry',
										'title' => 'Intro to Data Structures',
										'price' => '20',
										'description' => '2nd edition, not the latest but prof uses both. Only difference is a few practice questions',
										'photo' => 'textbook.png'), 
					'22' => array('id' => '22',
										'fName' => 'Judy',
										'title' => 'Intro to Business Policy',
										'price' => '45',
										'description' => 'Newest edition and in mint condition',
										'photo' => 'textbook.png'), 
					'23' => array('id' => '23',
										'fName' => 'William',
										'title' => 'Advanced Database Design',
										'price' => '25',
										'description' => 'Latest edition with some minor highlighting',
										'photo' => 'textbook.png'), 
					'24' => array('id' => '24',
										'fName' => 'Monika',
										'title' => 'Intro to Psych',
										'price' => '38',
										'description' => 'Will take $35 OBO. lastest edition in mint condition',
										'photo' => 'textbook.png'), 
					'25' => array('id' => '25',
										'fName' => 'Duy',
										'title' => 'Intro to Algorithms',
										'price' => '50',
										'description' => 'medium amount of highlighting. latest edition',
										'photo' => 'textbook.png'), 
					'26' => array('id' => '26',
										'fName' => 'Jeffery',
										'title' => '3D Video Game Modelling',
										'price' => '55',
										'description' => 'Comes with license key for 3D modelling software',
										'photo' => 'textbook.png'), 
					'27' => array('id' => '27',
										'fName' => 'Michelle',
										'title' => 'Human Resource Management',
										'price' => '80',
										'description' => 'Current edition the prof is using',
										'photo' => 'textbook.png'), 
					'28' => array('id' => '28',
										'fName' => 'Shan',
										'title' => 'Basics of Project Management',
										'price' => '60',
										'description' => 'Last years edition but still follows the course structure',
										'photo' => 'textbook.png'), 
					'29' => array('id' => '29',
										'fName' => 'Judy',
										'title' => 'How to be a Manager 101',
										'price' => '23',
										'description' => 'Most current edition in mint condition',
										'photo' => 'textbook.png'), 
					'30' => array('id' => '30',
										'fName' => 'Emily',
										'title' => 'International Corporate Law',
										'price' => '40',
										'description' => 'Near mint condition',
										'photo' => 'textbook.png') 

	);
?>