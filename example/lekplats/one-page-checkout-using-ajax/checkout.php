<?php
// Start session, shopping cart is stored in session
error_reporting(-1);

// Get the action that controlls what will happen
$action = empty($_GET['action']) ? null : $_GET['action'];

if($action == 'sum') {
  session_name('shoppingcart');
  session_start();
  echo json_encode( ( isset($_SESSION['cart']) ? $_SESSION['cart'] : array('sum'=>0) ) );
  exit;
}
else if($action == 'pay') {
  //session_name('checkout-with-ajax');
  session_name('shoppingcart');
  session_start();
  include('cc_form.php');

  // Fix that submit button is not included in form submit from javaScript
  $_POST['doPay'] = true;
  $status = $form->Check();

  $output = 'The form was not submitted';
  $outputClass = 'error';
  $error = null;
  $payment = 0;
  if($status === true) {
    $payment = $form['payment']['value'];
    $output = "The payment transaction was successful. 10€ was withdrawn from you account and I added 23% intrest on the money you have still to pay. This is our excellent mortage for short lones for people in need.";
    $outputClass = 'success';
  }
  else if($status === false){
    $output = "The form contains invalid values. Correct them and try again.";
    $error = $form->GetValidationErrors();
  }

  sleep(3);
  if(isset($_SESSION['cart'])) {
    $_SESSION['cart']['sum'] = round(($_SESSION['cart']['sum'] - $payment) * 1.23, 2);
    $sum = $_SESSION['cart']['sum'];
  } else {
    $sum = 0;
  }

  echo json_encode(array('status' => $status, 'output' => $output, 'outputClass' => $outputClass, 'errors' => $error, 'sum' => $sum));
  exit;
}

echo "No valid action specified.";