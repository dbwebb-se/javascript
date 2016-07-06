<?php $title='Login and maintain session though Ajax'; include(__DIR__ . '/../mall/header.php'); ?>

<div id='flash'>
<h1>Login through Ajax with PHP session</h1>

<form id="form1" method=post>
  <p><label>Login:<br><input type=text name=user></label></p>
  <p><label>Password:<br><input type=password99 name=password></label></p>
  <p>
    <input id="login" type=button name=login value=Login>
    <input id="logout" type=button name=logout value=Logout>
    <input id="status" type=button name=status value=Status>
  </p>
  <p><output id="output"></output></p>
</form>

</div>

<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>
