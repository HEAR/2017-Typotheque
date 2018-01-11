var blocPresent 	= [0];
var elListe  		= [];
var auteur   		= []
var listeTypos 		= document.getElementById("listeTypos");
var menuNom   		= document.getElementsByClassName("nom");
var menuFilter   	= document.getElementsByClassName("filter");

var beenSortAZ = false;
var beenSortOldToYoung = false;
var typoEnBloc = false;



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

var menuSort 		= document.getElementsByClassName("sort");
menuSort[0].addEventListener("click", modifyDisplay);	


function modifyDisplay(e){
	e.stopPropagation();

	if (typoEnBloc == false){
		enBloc();
		typoEnBloc= true;

	} else if (typoEnBloc == true) {

		enLigne();
		typoEnBloc= false;
	}

		function enBloc(){
			
			menuSort[0].removeChild(menuSort[0].children[0]);
			var carre= document.getElementsByClassName("square");


			for (var i = 0; i < carre.length; i++) {
			
			carre[i].className+= ' itemList';

			}

			listeTypos.style.display = 'grid';
			listeTypos.style["grid-template-columns"] = "1fr 1fr 1fr 1fr";


			for (var i = 0; i < listeTypos.children.length; i++) {

			listeTypos.children[i].className+= "enBloc"
			
			}

		}

		function enLigne (){

			var enfant = document.createElement("div");
			enfant.className+= 'square';
			menuSort[0].appendChild(enfant);

			var carre= document.getElementsByClassName("square");


			for (var i = 0; i < carre.length; i++) {
			// menuSort[0].children[i].style.borderBottom="solid white 1px";
			carre[i].setAttribute("class", "square");
			}
			listeTypos.style.display = 'inline';
			listeTypos.style["grid-template-columns"] = 'none';

			for (var i = 0; i < listeTypos.children.length; i++) {
			listeTypos.children[i].setAttribute("class","")

			}


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




			



