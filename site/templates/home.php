<?php snippet('header') ?>
<!-- home.php -->

<h1><?php echo $page->title()->html() ?></h1>
<ul>
<?php foreach ($site->children()->findByURI("typographies")->children() as $key => $typographie) : ?>
<li> <a href="<?= $typographie->url();  ?>"><?= $typographie->title()->html();  ?> </a> </li>


<?php endforeach; ?>
</ul>
<!--fin home.php -->
<?php snippet('footer') ?>