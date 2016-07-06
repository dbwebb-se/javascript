<?php
error_reporting(-1);
session_name('checkout-no-ajax');
session_start();

// Include the form 
include('cc_form.php');

$status = $form->Check();

$output = null;
$outputClass = null;
if($status === true) {
  // Form processed and callback returned true. Redirect to resultpage.
  //$_SESSION['output'] = "The payment transaction was successful. The money was withdrawn from you account.";
  //$_SESSION['outputClass'] = 'success';
  //header("Location: {$_SERVER['PHP_SELF']}");
  //exit;
  $output = "The payment transaction was successful. However, the payment can only be done through our excellent ajax interface.";
  $outputClass = 'success';
}
else if($status === false){
  // Form processed and callback returned false. Redirect to formpage again.
  //header("Location: http://dbwebb.se/javascript/lekplats/one-page-checkout-using-ajax/");
  //exit();
  //$_SESSION['output'] = "The form contains invalid values. Correct them and try again.";
  //$_SESSION['outputClass'] = 'error';
  //header("Location: {$_SERVER['PHP_SELF']}");
  //exit;
  $output = "The form contains invalid values. Correct them and try again.";
  $outputClass = 'error';

}


$title='One page checkout using ajax'; 
include(__DIR__ . '/../mall/header.php'); 
?>

<div id='flash'>
  <h1>Checkout</h1>
  <p>The following sum will be charged on your credit card: <span id='sum'></span> €.</p>

  <div id='output' class='<?=$outputClass?>'><?=$output?></div>
  <?=$form->GetHTML(array('columns'=>2))?>
</div>

<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>
