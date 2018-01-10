var blocPresent 	= [0];
var elListe  		= [];
var auteur   		= []
var listeTypos 		= document.getElementById("listeTypos");
var menuNom   		= document.getElementsByClassName("nom");
var menuFilter   	= document.getElementsByClassName("filter");
var beenSortAZ = false;
var beenSortOldToYoung = false;


Marquee3k.init();


for (var i = 0; i < listeTypos.children.length; i++) {

	listeTypos.children[i].addEventListener("click", loadTypoContent);
	elListe.push(listeTypos.children[i]);


	

	var dataDeLaTypo = {
	dataNom: listeTypos.children[i].getAttribute('data-nom'),
	dataDate: listeTypos.children[i].getAttribute('data-annee'),
	position: i ,
	element : listeTypos.children[i]

	}

	auteur.push(dataDeLaTypo);
}


function tri_parNom() {

var AtoZ = function compareAZ(a,b) {
  if (a.dataNom < b.dataNom)
    return -1;
  if (a.dataNom > b.dataNom)
    return 1;
  return 0;

}

 var ZtoA = function compareZA(a,b) {
  if (a.dataNom > b.dataNom)
    return -1;
  if (a.dataNom < b.dataNom)
    return 1;
  return 0;
}


 if (beenSortAZ == false) {
 	 auteur.sort(AtoZ) 
 	 beenSortAZ = true
 	}
else {
 	auteur.sort(ZtoA)
 	beenSortAZ = false
 }


while(listeTypos.firstChild){
	listeTypos.removeChild(listeTypos.firstChild);
}


for (var i = 0; i < auteur.length; i++) {
	listeTypos.appendChild(auteur[i].element);

}


}

function tri_parAnnee(){

function compareOldToYoung(a,b) {
  if (a.dataDate > b.dataDate)
    return -1;
  if (a.dataDate < b.dataDate)
    return 1;
  return 0;



}

function compareYoungToOld(a,b) {
  if (a.dataDate < b.dataDate)
    return -1;
  if (a.dataDate > b.dataDate)
    return 1;
  return 0;

}

 if (beenSortOldToYoung == false) {
 	auteur.sort(compareOldToYoung);
 	 beenSortOldToYoung= true
 	}
else {
 	auteur.sort(compareYoungToOld)
 	beenSortOldToYoung = false
 }

while(listeTypos.firstChild){
	listeTypos.removeChild(listeTypos.firstChild);
}


for (var i = 0; i < auteur.length; i++) {
	listeTypos.appendChild(auteur[i].element);

}

}



	
console.log(menuFilter);
for (var i = 0; i < menuFilter.length; i++) {

	menuFilter[i].addEventListener("click", filterListTypos);

}

for (var i = 0; i < elListe.length; i++) {

	elListe[i].addEventListener("click", loadTypoContent);
}


function filterListTypos(e){
	e.stopPropagation();

	if (e.currentTarget.getAttribute('data-filter') == "nom" ) {

		tri_parNom();
	}
	else if (e.currentTarget.getAttribute('data-filter') == "annee" ){

		tri_parAnnee();

	}


}


function loadTypoContent(e){

	e.stopPropagation();

	console.log("getNom",e.currentTarget	)





	fetch(e.currentTarget.getAttribute('data-url'))
	.then( function(res){
		return res.text();
	})
	.then(function(data){

		var corp = document.body;
		var ficheTypo = document.getElementById("fichetypo");

		
		if (blocPresent[0] == 1) {

			while (ficheTypo.firstChild) {
  				ficheTypo.removeChild(ficheTypo.firstChild);
  			}
  			ficheTypo.insertAdjacentHTML('beforeend', data);
		}
		else {
			blocPresent.splice(0,1,1)
			ficheTypo.insertAdjacentHTML('beforeend', data);
		};


	})
}	




			



