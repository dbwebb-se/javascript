<?php
// Start session, shopping cart is stored in session
error_reporting(-1);
session_name(preg_replace('/[^a-z\d]/i', '', __DIR__));
session_start();

// Get the action that controlles what will happen
$action = empty($_GET['action']) ? null : $_GET['action'];


// Create the shopping cart in the session if it does not exists.
// And support action=clear to do the same.
if ($action == 'clear' || !isset($_SESSION['cart'])) {
	$_SESSION['cart'] = array('sum'=>0, 'numitems' => 0, 'items'=>array());		
}


// Define the items and prices
$items = array(
	'book1' => array('title' => 'JavaScript The Definitive Guide', 'price' => '17'),
	'book2' => array('title' => 'JavaScript The Good Parts', 'price' => '19'),
	'book3' => array('title' => 'jQuery Novice To Ninja', 'price' => '23'),
);


// Action to add item in shopping cart
if ($action == 'add' && !empty($_POST['itemid'])) {
	$itemid = $_POST['itemid'];
	$price = $items[$itemid]['price'];
	$title = $items[$itemid]['title'];

	if(isset($_SESSION['cart']['items'][$itemid])) {
		$_SESSION['cart']['items'][$itemid]['numitems']++;
		$_SESSION['cart']['items'][$itemid]['sum'] += $price;
	} else {
		$_SESSION['cart']['items'][$itemid] = array('numitems' => 1, 'sum' => $price, 'title' => $title);
	}

	$_SESSION['cart']['numitems']++;
	$_SESSION['cart']['sum'] += $price;
}


// Action to remove item from shopping cart



// Draw html table of items	by using a view/template file
$items = $_SESSION['cart']['items'];

$rows = null;
foreach($items as $key => $val) {
	$rows .= "<tr><td>{$val['title']}</td><td>{$val['numitems']}</td><td>{$val['sum']}</td></tr>\n";
}
	

$items = $_SESSION['cart']['content'] = <<<EOD
<table>
	<tr><th>Item</th><th>Quantity</th><th>Sum</th></tr>
	{$rows}
</table>

EOD;



// Print out the content of the shopping cart
echo json_encode($_SESSION['cart']);
