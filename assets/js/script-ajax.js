

var blocPresent = [0];
var elListe = [];
var Auteur = []
var listeNom = document.getElementById("liste");





	for (var i = 0; i < listeNom.children.length; i++) {
	
		listeNom.children[i].addEventListener("click", getNom);
		elListe.push(listeNom.children[i]);
		
	}
	// console.log(elListe);
	
console.log(elListe);

for (var i = 0; i < elListe.length; i++) {
Auteur.push(elListe[i].getAttribute('nom'));

	
}

Auteur.sort(function(a,b){
    return b.localeCompare(a);	
})


console.log(Auteur);

function getNom(e){

	// console.log(e.target)



	fetch(e.target.getAttribute('url'))
	.then( function(res){

return res.text();


	})
	.then(function(data){


		var corp = document.body;
		var ficheTypo = document.getElementById("fichetypo");
		console.log(data);
		
		if (blocPresent[0] == 1) {

			console.log("ok");

			
			while (ficheTypo.firstChild) {
  			ficheTypo.removeChild(ficheTypo.firstChild);}

  			ficheTypo.insertAdjacentHTML('afterbegin', data);

		}



			 else {

				console.log("lol");
				blocPresent.splice(0,1,1)

				ficheTypo.insertAdjacentHTML('afterbegin', data);

			};



		
				// var bloc = document.createElement("div");

			// console.log(data);
				// bloc.insertAdjacentHTML('afterbegin', data);
				
				// var contenuPage = document.createTextNode(data);
				// contenuPageReg = contenuPage.replace(/^"/igm,"");
				// console.log(contenuPageReg);
				
				

			// corp.appendChild(bloc);

	})
	
}	




			

// function makeRequest(url) {

//         var httpRequest = false;

//         httpRequest = new XMLHttpRequest();

//         if (!httpRequest) {
//             alert('Abandon :( Impossible de créer une instance XMLHTTP');
//             return false;
//         }

//         httpRequest.onreadystatechange = function() { alertContents(httpRequest); };
//         httpRequest.open('GET', url, true);
//         httpRequest.send(null);

//     }

//     function alertContents(httpRequest) {

//         if (httpRequest.readyState == XMLHttpRequest.DONE) {
//             if (httpRequest.status == 200) {
//     //             var xmldoc = httpRequest.responseXML;
// 				// var root_node = xmldoc.getElementsByTagName('h1').item(0);
				
// 				// var corp = document.body
// 				// // var bloc = document.createElement("div")

// 				// corp.appendChild(root_node);
// 				console.log(url);



// 				// console.log(root_node.firstChild.data);
//             } else {
//                 alert('Un problème est survenu avec la requête.');
//             }
//         }

//     }


 // window.onload = elementClickable ; 


