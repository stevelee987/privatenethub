<?php

$input = $_GET["in"];
$output = $_GET["out"];

	$fp = fsockopen("192.168.1.75", 23);

	if(!$fp) {

	echo "Failed to connect to Matrix.";

	} else {

	echo "Connected to Matrix.";

	$buf=fgets($fp);

	fwrite($fp, "r ".$input." ".$output."\r\n");
	  
	$buf=fgets($fp);

	}

?>