
<?php 

$fontname = str_replace(".woff", "", $page->font());

$fontFace = "@font-face {
 font-family: \"$fontname\";
 src: url(\"{$page->font()}\") format(\"woff\");
}";

file_put_contents($page->root().'/'.$page->dirname().'.css', $fontFace);


 ?>

<div class="container">
<div  contenteditable="plainText-only" class="testeur"  data-boolean="<?= $page->testeur()?>" data-text="<?= $page->demotext();	?>  " data-font="<?= $page->diruri() ?>">
</div>

</div>
<input type="range" class="nested" min="5" max="40">
<!-- <h2 class="titreTypo"><?= $page->title()->html() ?></h2> -->
<!--fin typographie.php -->

<!-- <p><?= $page->auteur()->text(); ?></p> -->
<!-- <p class="dateTypo"><?= $page->date("Y"); ?></p> -->
<div class="description">


<br>
<?= $page->dirname() ?><br>
<?= $page->diruri() ?><br>
<?= $page->root() ?><br>

<p><?= $page->description()->kirbyText(); ?></p>

</div>


