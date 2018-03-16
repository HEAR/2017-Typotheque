<!-- création du fichier css correspondant a chaque typo -->
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

<div class="description">



<!--dirname() diruri() root() ?> -->

<p><?= $page->description()->kirbyText(); ?></p>

</div>


