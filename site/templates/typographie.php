<!-- création du fichier css correspondant a chaque typo -->
<?php 

$fontname = str_replace(".woff", "", $page->font());

$fontFace = "@font-face {
 font-family: \"$fontname\";
 src: url(\"{$page->font()}\") format(\"woff\");
}";

file_put_contents($page->root().'/'.$page->dirname().'.css', $fontFace);

if( !isset($_GET['ajax']) ){
// if( !r::ajax()){ ?>

<?php snippet('header') ?>
<?php snippet('menu-typos') ?>

<div id= "fichetypo" class="box4">
<!-- FIN HEADER -->

<?php } ?>

<div class="container">
<div  contenteditable="plainText-only" class="testeur"  data-boolean="<?= $page->testeur()?>" data-text="<?= $page->demotext();	?>  " data-font="<?= $page->diruri() ?>">
</div>

</div>
<input type="range" class="nested" min="5" max="40">

<div class="description">

<?php // echo "header : ".$_SERVER['HTTP_X_REQUESTED_WITH']." ".$_GET['ajax']." <br>\n"; ?>
<!--dirname() diruri() root() ?> -->

<p><?= $page->description()->kirbyText(); ?></p>

</div>


<?php  if( !isset($_GET['ajax']) ){
// if( !r::ajax()){ ?>
<!-- FOOTER -->
</div>
<?php snippet('footer') ?>

<?php } ?>