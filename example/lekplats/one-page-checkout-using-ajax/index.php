<?php
error_reporting(-1);
session_name('checkout-with-ajax');
session_start();

// Include the form 
include('cc_form.php');

$title='One page checkout using ajax'; 
include(__DIR__ . '/../mall/header.php'); 
?>

<div id='flash'>
  <h1>Checkout</h1>
  <p>The following sum will be charged on your credit card: <span id='sum'></span> €.</p>

  <div id='output'></div>
  <?=$form->GetHTML(array('id' => 'form1', 'columns' => 2))?>
</div>

<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>
