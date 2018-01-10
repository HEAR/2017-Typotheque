
<!-- typographie.php -->
<h1><?= $page->title()->html() ?></h1>



<p><?= $page->auteur()->text(); ?></p>
<p><?= $page->date("Y"); ?></p>
<p><?= $page->description()->kirbyText(); ?></p>

<div style="width: 500px; height: 400px; background-color: grey;">
	<p> testeur</p>
</div>
<!--fin typographie.php -->
