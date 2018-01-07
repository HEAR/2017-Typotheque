<?php snippet('header') ?>
<!-- home.php -->

<ul class="box2" >
	<li class="nested"> Année</li>
	<li class="nested"> Nom</li>
	<li class="nested"> Projet</li>
	<li class="nested"></li>
</ul>


<ul id="liste" class="box3">
<?php foreach ($site->children()->findByURI("typographies")->children() as $key => $typographie) : ?>


<li nom="<?= $typographie->auteur();  ?>"> <p url="<?= $typographie->url();?>"  > <?= $typographie->title()->html(); ?> <?= $typographie->auteur();  ?> </p> </li>





<?php endforeach; ?>



</ul>

<div id= "fichetypo" class="box4"> </div>
<!--fin home.php -->
<?php snippet('footer') ?>