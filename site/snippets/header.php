<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title ><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>

  <?php echo css(

'assets/css/style.css'

  ); ?>

</head>
<body class="wrapper">

<div id="header" class="box1 marquee3k" data-speed="0.5" data-reverse="true" data-pausable="true"> 
<h1>
<?php echo $page->title()->html() ?></h1> </div>
