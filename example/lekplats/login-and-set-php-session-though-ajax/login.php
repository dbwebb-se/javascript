<?php
// Create the session
session_name(preg_replace('/[^a-z\d]/i', '', __DIR__));
session_start();

// Just show off the spinning image for a second
sleep(2);

// Get incoming on what to do
$do = isset($_GET['do']) ? $_GET['do'] : null;

// Do login
if($do == 'login') {
	if(in_array($_POST['user'], array('doe', 'root', 'admin'))) {
		$_SESSION['user'] = $_POST['user'];
		$output = "Successfully login as user: " . $_SESSION['user'];
	}
	else {
		$_SESSION['user'] = 'Unknown user, not authenticated';
		$output = "Failed login, try login as doe, root or admin";
	}
}

// Do Logout
else if($do == 'logout') {
	$output = "Logged out as user: " . $_SESSION['user'];
	$_SESSION['user'] = null;
}

// Do check status
else if($do == 'status') {
	$output = "You are currently known as user: " . $_SESSION['user'];
}

// Else define this a anonymous user
else {
	$_SESSION['user'] = 'Anonymous user';
	$output = "You are now identified as user: " . $_SESSION['user'];
}

// Deliver the response, as a JSON object containing the name of the user.
header('Content-type: application/json');
echo json_encode(array("output" => $output));
