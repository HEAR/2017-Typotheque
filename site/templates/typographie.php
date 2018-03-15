


<div class="container">
<div  contenteditable="plainText-only" class="testeur"  data-boolean="<?= $page->testeur()?>" data-text="<?= $page->demotext();	?>  " data-font="<?php 
// always check if the image exists! 
  if ($page->font()) {
	echo $font = $page->font(); 
  }
  else {
  	echo "none";
  }
 ?>">
</div>

</div>
<input type="range" class="nested" min="5" max="40">
<!-- <h2 class="titreTypo"><?= $page->title()->html() ?></h2> -->
<!--fin typographie.php -->

<!-- <p><?= $page->auteur()->text(); ?></p> -->
<!-- <p class="dateTypo"><?= $page->date("Y"); ?></p> -->
<div class="description">
<p><?= $page->description()->kirbyText(); ?></p>

</div>


