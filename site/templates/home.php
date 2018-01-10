<?php snippet('header') ?>
<!-- home.php -->

<div class="box2">
	<ul>
		<li class="nested filter" data-filter="annee"> Année</li>
		<li class="nested filter" data-filter="nom"> Nom</li>
		<li class="nested filter" data-filter="projet"> Projet</li>
		<li class="nested sort">
		
		</li>
	</ul>
</div>


<div class="box3">
	<ul id="listeTypos" class="list">

	<?php foreach ($site->children()->findByURI("typographies")->children() as $key => $typographie) : ?>


	<li data-titre="<?= $typographie->title()->text();  ?>" data-nom="<?= $typographie->auteur()->text();  ?>" data-annee="<?= $typographie->date("Y"); ?>" data-url="<?= $typographie->url();?>" > <p> <?= $typographie->title()->html(); ?> <?= $typographie->auteur();  ?> <?= $typographie->date("Y");  ?></p> </li>

	<?php endforeach; ?>

	</ul>
</div>

<div id= "fichetypo" class="box4"> </div>
<!--fin home.php -->
<?php snippet('footer') ?>