<?php
$quotes = array(
	'I could calculate your chance of survival, but you won\'t like it.', 
	'I\'d give you advice, but you wouldn\'t listen. No one ever does.', 
	'I ache, therefore I am.', 
	'I\'ve seen it. It\'s rubbish. (About a Magrathean sunset that Arthur finds magnificent)', 
	'Not that anyone cares what I say, but the Restaurant is on the other end of the universe.', 
	'I think you ought to know I\'m feeling very depressed.',
	'My capacity for happiness," he added, "you could fit into a matchbox without taking out the matches first.',
	'Arthur: "Marvin, any ideas?" Marvin: "I have a million ideas. They all point to certain death."',
	'"What\'s up?" [asked Ford.] "I don\'t know," said Marvin, "I\'ve never been there."',
	'Marvin: "I am at a rough estimate thirty billion times more intelligent than you. Let me give you an example. Think of a number, any number." Zem: "Er, five." Marvin: "Wrong. You see?"',
	'Zaphod: "Can it Trillian, I\'m trying to die with dignity. Marvin: "I\'m just trying to die."',
);

header('Content-type: application/json');
if (isset($_GET['all'])) {
	echo json_encode(array("quotes" => $quotes));
} else {
	echo json_encode(array("quote" => $quotes[rand(0, count($quotes)-1)]));
}
