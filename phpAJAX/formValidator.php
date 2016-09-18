<?php
// so I can dev from my local machine
header('Access-Control-Allow-Origin: *');  

// Arrays that contain valid inputs
$school = array("athabasca", "mcmaster", "waterloo", "uoft", "ubc");
$department = array('ACCT','COMP','ENGL','MATH','POLI','PSYC','BIOLOGY','ECON','HISTORY','MUSIC','PHYSICS','SCIENCE','ACTSC','AFM','BIOL','ECE','GEOG','KIN','ANT (Anthropology)','AST (Astronomy)','CHM (Chemistry)','GGR (Geography)','BA','COMM','ENGL','JRNL','SOWK');
$courseCode = array('245','250','253','351','352','355','356','390','200','206','210', '214', '230', '266', '268', '272','211','212','255','302','303','304','305','306','100','101','209','215','216','244','260','270','277','278','291','301','307','309','311','325','200','210','228','289','290','300','304','310','340','1A03','1M03','2A03','2B03','2D03','3S03','1B03','1BB3','2A03','2B03','2G03','2H03','2X03','1CC3','1DD3','1FF3','2CC3','2G03','2HH3','2V03','2Z03','1A03','1AA3','1CC3','1D03','3CM3','3EE3','3EE6','3SS3','3X03','1A03','1AA3','1C03','1D03','1E03','2G03','2H04','3N03','1A03','3A03','3EP3','3EX6','3RP3','231','232','331','371','372','433','446','453','101','121','123','131','231','323','328','333','341','362','120','130','165','211','239','241','273','280','302','103','106','124','155','327','331','351','356','361','101','102','202','209','222','271','281','306','318','100','101','140','205','221','242','250','307','310','330','A01H3','A02H3','B01H3','B09H3','C03H3','A01H3','A02H3','B23H3','C25H3','A10H3','B16H3','B51H3','A02H3','A03H3','B02H3','B05H3','504','507','508','511','520','530','551','560','562','564','100','101','120','202','204','220','280','335','362','371','100','110','111','120','140','210','211','220','301','309','310','100','503','515','520','533','534','539','548','549','550','555','200','201','305','310','315','320','335','337','400','405','415');

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