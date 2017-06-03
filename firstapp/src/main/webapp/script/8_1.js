$(document).ready(function(){
	
	//verbergen van elementen
	$('#home').hide();
	$('#toevoegen').hide();
	$('#search').hide();
	$('#land-pagina').hide();
	$('#messagebox').hide();
	
	

	
//einde startup	
});
	
	


//home-knop
$("#menu-home").click(function(){
	$('#toevoegen').hide();
	$('#search').hide();
	$('#land-pagina').hide();
	$('#home').hide();
	$('#login').hide();
	
	$('#home').fadeIn(1000);
});


//add-knop
$('#menu-item1').click(function(){
	$('#toevoegen').hide();
	$('#search').hide();
	$('#land-pagina').hide();
	$('#home').hide();
	$('#login').hide();

	
	$('#toevoegen').fadeIn(1000);
});

//search-knop
$('#menu-item2').click(function(){
	$('#toevoegen').hide();
	$('#search').hide();
	$('#land-pagina').hide();
	$('#home').hide();
	$('#login').hide();

		
	$('#search').fadeIn(1000);
});

$('#menu-login').click(function(){
	$('#toevoegen').hide();
	$('#search').hide();
	$('#land-pagina').hide();
	$('#home').hide();
	$('#login').hide();

	$('#login').fadeIn(1000);	
})
	

function showCountryPage(){
	$('#toevoegen').hide();
	$('#search').hide();
	$('#land-pagina').hide();
	$('#home').hide();
	$('#login').hide();

		
	$('#land-pagina').fadeIn(1000);
}	
	
function closeCountryPage(){
	$('#toevoegen').hide();
	$('#search').hide();
	$('#land-pagina').hide();
	$('#home').hide();
	$('#login').hide();

		
	$('#search').fadeIn(1000);
}

function messageWindow(message, color){
	
	var messageboxText = document.getElementById('messagebox-text');
	
	//vul de messagebox met de message
	messageboxText.innerHTML = message;
	
	//zet de kleur text van de messagebox
	messagebox.style.backgroundColor = color;
		
	//laat de messagebox zien voor x..tijd
	$('#messagebox').fadeIn(1000, function(){
		$('#messagebox').fadeOut(5000);
	});
}


function clearTable(){
	$('#tableBody').empty();
	
}

	
/*
	=================================================
		-1-			Functie: 	1  Land ophalen							COMPLETED
	=================================================
	
*/
	
function landOphalen(code){
		
		try{
			
		
		$.getJSON("http://localhost:8070/firstapp/restservices/countries/"+code,+"jsonp" ,function(data){			

			console.log(data);
		// vullen van de section met id="land-pagina"
			
			document.getElementById("input-landcode-kort").value = data.code;
			document.getElementById("input-landcode-lang").value = data.code2;
			document.getElementById("input-land_naam").value = data.Land;
			document.getElementById("input-hoofdstad").value = data.capital;
			document.getElementById("input-continent").value = data.continent;
			document.getElementById("input-regio").value = data.region;
			document.getElementById("input-oppervlakte").value = data.surface;
			document.getElementById("input-populatie").value = data.population;
			document.getElementById("input-regering").value = data.government;
			document.getElementById("input-latitude").value = data.latitude;
			document.getElementById("input-longtitude").value = data.longitude;
			document.getElementById("land-invoer-header").append(data.name);
			document.getElementById("hidden-code").value = data.code2;
			
			
			//alvast instellen dat als je op een land klikt dat ook de wijzig en delete knop
			// een eventhandler krijgen waarbij de "code" als parameter gegeven wordt
			//eerst verwijderen (als er nog een vorige was)
			
			
			//dan toevoegen van de nieuwe
			
			
			//laat nu de pagina zien waarop al deze informatie staat
			showCountryPage();
			
			//laat ook een message zien als het allemaal goed is verlopen
			messageWindow("De data is succesvol opgehaald uit de database!", "green");
			
			
	}),"json" }
		
		catch(err){
		
			//popup met de error
			
			messageWindow("er is een fout opgetreden:" +err, "red");
			
	}	
}

		
	
	
	
/*
	=================================================
		-2-			Functie: 	Alle landen ophalen 						COMPLETED
	=================================================
	
*/	
	
function alleLanden(){
	
	//eerst de tabel leegmaken voordat je er wat aanvast plakt
	clearTable();
	
	
	
	
	try{
		
		
		$.getJSON("http://localhost:8070/firstapp/restservices/countries","jsonp" ,function(data){			
			$.each(data, function(k, v){
				$('tbody').append("<tr onclick= 'landOphalen(\"" + v.code2 + "\");'><td><div>"+v.Land+"</div></td><td><div>"+v.code+"</div></td><td><div>"+v.capital+"</div></td><td><div>"+v.continent+"</div></td><td><div>"+v.region+"</div></td><td><div>"+v.surface+"</div></td><td><div>"+v.population+"</div></td><td><div>"+v.government+"</div></td><td><div>"+v.latitude+"</div></td><td><div>"+v.longitude+"</div></td></tr>");
			});
			

			$('#keuze-invoer-header').empty();
			document.getElementById("keuze-invoer-header").append("Overzicht van landen: Alle Landen");
			
	
			//laat ook een message zien als het allemaal goed is verlopen
			messageWindow("De data is succesvol opgehaald uit de database!", "green");
		
		}),"json"}
		
	
	catch(err){
		//popup met de error		
		messageWindow("er is een fout opgetreden:" +err, "red");
		
	}
}
	
	
	
	
	
	
	

	




	
	
	
/*
	=================================================
		-3-			Functie: 	Oppervlakte ophalen
	=================================================
	
*/	


		
function grootsteOppervlaktes(){
	
	//eerst de tabel leegmaken voordat je er wat aanvast plakt
	clearTable();
	
	try{
		
		$.getJSON("http://localhost:8070/firstapp/restservices/countries/largestsurfaces","jsonp" ,function(data){			
			$.each(data, function(k, v){
				$('tbody').append("<tr onclick= 'landOphalen(\"" + v.code2 + "\");'><td><div>"+v.Land+"</div></td><td><div>"+v.code+"</div></td><td><div>"+v.capital+"</div></td><td><div>"+v.continent+"</div></td><td><div>"+v.region+"</div></td><td><div>"+v.surface+"</div></td><td><div>"+v.population+"</div></td><td><div>"+v.government+"</div></td><td><div>"+v.latitude+"</div></td><td><div>"+v.longitude+"</div></td></tr>");
			});
			
			$('#keuze-invoer-header').empty();
			document.getElementById("keuze-invoer-header").append("Overzicht van landen: Oppervlakte");
			
			//laat ook een message zien als het allemaal goed is verlopen
			messageWindow("De data is succesvol opgehaald uit de database!", "green");
			
	}),"json"}
	
	catch(err){
		
		//popup met de error		
		messageWindow("er is een fout opgetreden:" +err, "red");
		
	}
	
}	
	
	
	

	
	
	
	
/*
	=================================================
		-4-			Functie: 	Populatie ophalen
	=================================================
	
*/	
		
	
function grootstePopulaties(){
		
	//eerst de tabel leegmaken voordat je er wat aanvast plakt
	clearTable();
	
	try{
		
		$.getJSON("http://localhost:8070/firstapp/restservices/countries/largestpopulations","jsonp" ,function(data){			
			$.each(data, function(k, v){
				$('tbody').append("<tr onclick= 'landOphalen(\"" + v.code2 + "\");'><td><div>"+v.Land+"</div></td><td><div>"+v.code+"</div></td><td><div>"+v.capital+"</div></td><td><div>"+v.continent+"</div></td><td><div>"+v.region+"</div></td><td><div>"+v.surface+"</div></td><td><div>"+v.population+"</div></td><td><div>"+v.government+"</div></td><td><div>"+v.latitude+"</div></td><td><div>"+v.longitude+"</div></td></tr>");
			});
			
			$('#keuze-invoer-header').empty();
			document.getElementById("keuze-invoer-header").append("Overzicht van landen: Populatie");
			
			//laat ook een message zien als het allemaal goed is verlopen
			messageWindow("De data is succesvol opgehaald uit de database!", "green");
			
		}),"json"}
	
	
	catch(err){
		
		//popup met de error		
		messageWindow("er is een fout opgetreden:" +err, "red");
	
	}
}
	
	
	
/*
	=================================================
		-5-			Functie: 	RandomSearch
	=================================================
	
*/
	
function randomSearch(){
	
	//eerst de tabel leegmaken voordat je er wat aanvast plakt
	clearTable();
	
	try{
		
		var zoek = $('#search-input').val();
		console.log("zoek: "+ zoek);
		
		
		$.getJSON("http://localhost:8070/firstapp/restservices/countries/random/" + zoek ,+"jsonp" ,function(data){
			
			//niks gevonden?
			if(data.length == 0){
				
				//laat ook een message zien als het allemaal goed is verlopen
				messageWindow("Er is GEEN data gevonden: zoek opnieuw!", "yellow");
				
			}
			else{				
				
				$.each(data, function(k, v){
					console.log(data);
					
					$('tbody').append("<tr onclick= 'landOphalen(\"" + v.code2 + "\");'><td><div>"+v.Land+"</div></td><td><div>"+v.code+"</div></td><td><div>"+v.capital+"</div></td><td><div>"+v.continent+"</div></td><td><div>"+v.region+"</div></td><td><div>"+v.surface+"</div></td><td><div>"+v.population+"</div></td><td><div>"+v.government+"</div></td><td><div>"+v.latitude+"</div></td><td><div>"+v.longitude+"</div></td></tr>");
							
				});
				
				$('#keuze-invoer-header').empty();
				document.getElementById("keuze-invoer-header").append("Overzicht van landen: Random Search");							
				
				//laat ook een message zien als het allemaal goed is verlopen
				messageWindow("De data is succesvol opgehaald uit de database!", "green");
				
			}
			
		}),"json"}		
		
		
	catch(err){
		
		//popup met de error
		
		messageWindow("er is een fout opgetreden:" +err, "red");
		
		
	}
}	

		
function isNumber(num) {
	  return (typeof num == 'string' || typeof num == 'number') && !isNaN(num - 0) && num !== '';
	};		

	
	
	
/*
	=================================================
		-6-			Functie: 	Land aanmaken		==> POST REQUEST
	=================================================
	
*/	
	
function createCountry(){
	
	//validatie van alle data, lengte/converteren
	try{
		console.log("check-1");
		//alle data ophalen uit de elementen	
		var kort = $('#landcode-kort').val();
		var lang = $('#landcode-lang').val();
		var naam = $('#land_naam').val();
		var city = $('#hoofdstad').val();
		var continent = $('#continent').val();
		var regio = $('#regio').val();
		var oppervlakte = $('#oppervlakte').val();
		var populatie = $('#populatie').val();
		var regering = $('#regering').val();
		var lat = $('#latitude').val();
		var lon  = $('#longtitude').val();
		
		
		var continentList = [ 'Europe' , 'Asia' , 'South America' , 'Antarctica' , 'North America' , 'Oceania' , 'Africa'  ];

		console.log("1");
		//checks op alle data 
		
		if((kort.length > 0) == false || (kort.length <=2) == false ){ // de request gaat per code, minimaal 1 code is dus verplicht
			messageWindow("landcode (kort) is MAX 2 tekens", "red");
		}
		else if((lang.length <= 3) == false){
			messageWindow("landcode (lang) is MAX 3 tekens", "red");
		}
		else if((naam.length > 0) == false || (naam.length <= 52) == false){
			messageWindow("landnaam  Moet ingevuld zijn  en bestaat uit MAX 52 tekens", "red");			
		}
		else if((city.length > 0) == false){
			messageWindow("Je moet een hoofdstad invullen", "red");
		}
		else if((continentList.indexOf(continent) > -1) == false){
			messageWindow("Geldige continenten zijn : Europe , Asia , South America , North America , Oceania , Africa , Antarctica ", "red");
		}
		else if((regio.length <= 26) == false){
			messageWindow("Regio is MAX 26 tekens", "red");
		}
		else if(isNumber(oppervlakte) == false){ 				// het moet een nummer zijn
			messageWindow("Oppervlakte MOET een getal zijn", "red");
		}
		else if(isNumber(populatie) == false){ 					// het moet een getal zijn
			messageWindow("Populatie MOET een getal zijn", "red");
		}
		else if((regering.length <= 45) == false){
			messageWindow("Regering is MAX 45 tekens","red");
		}
		else if(isNumber(lat) == false){						// het moet een getal zijn
			messageWindow("Latitude MOET een getal zijn", "red");
		}
		else if(isNumber(lon) == false){						// het moet een getal zijn
			messageWindow("Longitude MOET een getal zijn", "red");
		}
		else{
			console.log("2");
			// nu nog converteren waar nodig
			try{
				
				oppervlakte = Number(oppervlakte);
				oppervlakte.toFixed(2);
				
				populatie = Number(populatie);
				populatie.toFixed(0);				//halve mensen bestaan niet

				lat = Number(lat);
				lat.toFixed(2);
				
				lon = Number(lon);
				lon.toFixed(2);
				
				console.log("3");
				
			}catch(err){
				messageWindow("Error met converteren:" + err, "red");
			}
		
		
			/*============================================		========================================	
			   Alle checks/converts  nu (eindelijk) gehad   ==> 	Dan kan het de database in	
			  ============================================		========================================*/
			console.log("4");
				
			//eerst een data-object maken van alle ingevoerde gegevens voordat we deze naar de servervice sturen
			var data = { "kort": kort, "lang": lang, "land": naam, "capital": city, "continent": continent, "regio": regio,	"oppervlakte": oppervlakte, "populatie": populatie, "regering": regering, "latitude": lat, "longitude": lon};
/*			data.kort = kort;
			data.lang = lang;
			data.naam = naam;
			data.capital = city;
			data.continent = continent;
			data.regio = regio;
			data.oppervlakte = oppervlakte;
			data.populatie = populatie;
			data.regering = regering;
			data.latitude = latitude;
			data.longitude = longitude;*/
				
			//omzetten naar een voor de servervice te begrijpen formaat
			var JSONdata = JSON.stringify(data);
			
			
			
			
			$.ajax("/firstapp/restservices/countries/"+kort,{
				type: "post",
				data: JSONdata,
			    beforeSend: function (xhr) { // je moet ingelogged zijn om het te mogen uitvoeren (token ophalen)
			        var token = window.sessionStorage.getItem("sessionToken");
			        xhr.setRequestHeader( 'Authorization', 'Bearer ' + token);
			    },

				success: function(response){
					$('#land-pagina').hide();
					$('#search').fadeIn(1000);
					
					var landElement = "<div id='response-country-name'>"+response.naam+"</div>";
					$('#toegevoegde-landen-content').append(landElement);
					
					messageWindow("Response:" + response.response, "green");


				},
				error: function(response){
					messageWindow("Error response AJAX POST: " + response.response, "red");
				}
			});
		}		
	}
	catch(err){
		messageWindow("Error:" + err, "red");
	}
}
	
/*
=================================================
	-7-			Functie: 	Land wijzigen 		==>  PUT REQUEST   ===> nagenoeg dezelfde functie als createCountry(); (zelfde checks)
=================================================

*/	


function adjustCountry(){

	//haal de code op van het land
	var landcode = $("#input-landcode-lang").val();
	console.log(landcode);
	
	//ook de hidden-field met landcode 
	//(als mensen ineens een andere landcode invullen die anders is dan het opgehaalde land)
	
	var hiddenLandcode = $("#hidden-code").val();
	console.log(hiddenLandcode);
	
	
	if(landcode != hiddenLandcode){
		messageWindow("Error: Je landcode klopt niet meer. Verander terug of laad de data opnieuw in" , "yellow");
	}
	else{// ga het land aanpassen in de database
		
		//validatie van alle data, lengte/converteren  --> net als bij het toevoegen van een land
		try{
			console.log("check-1");
			//alle data ophalen uit de elementen	
			var kort = $('#input-landcode-kort').val();
			var lang = $('#input-landcode-lang').val();
			var naam = $('#input-land_naam').val();
			var city = $('#input-hoofdstad').val();
			var continent = $('#input-continent').val();
			var regio = $('#input-regio').val();
			var oppervlakte = $('#input-oppervlakte').val();
			var populatie = $('#input-populatie').val();
			var regering = $('#input-regering').val();
			var lat = $('#input-latitude').val();
			var lon  = $('#input-longtitude').val();
			
			
			var continentList = [ 'Europe' , 'Asia' , 'South America' , 'Antarctica' , 'North America' , 'Oceania' , 'Africa'  ];

			console.log("1");
			//checks op alle data 
			
			if((kort.length <=2) == false ){ 
				messageWindow("landcode (kort) is MAX 2 tekens", "red");
			}
			else if((lang.length > 0) == false || (lang.length <=3) == false){// de request gaat per code, minimaal 1 code is dus verplicht
				messageWindow("landcode (lang) is MAX 3 tekens", "red");
			}
			else if((naam.length > 0) == false || (naam.length <= 52) == false){
				messageWindow("landnaam  Moet ingevuld zijn  en bestaat uit MAX 52 tekens", "red");			
			}
			else if((city.length > 0) == false){
				messageWindow("Je moet een hoofdstad invullen", "red");
			}
			else if((continentList.indexOf(continent) > -1) == false){
				messageWindow("Geldige continenten zijn : Europe , Asia , South America , North America , Oceania , Africa , Antarctica ", "red");
			}
			else if((regio.length <= 26) == false){
				messageWindow("Regio is MAX 26 tekens", "red");
			}
			else if(isNumber(oppervlakte) == false){ 				// het moet een nummer zijn
				messageWindow("Oppervlakte MOET een getal zijn", "red");
			}
			else if(isNumber(populatie) == false){ 					// het moet een getal zijn
				messageWindow("Populatie MOET een getal zijn", "red");
			}
			else if((regering.length <= 45) == false){
				messageWindow("Regering is MAX 45 tekens","red");
			}
			else if(isNumber(lat) == false){						// het moet een getal zijn
				messageWindow("Latitude MOET een getal zijn", "red");
			}
			else if(isNumber(lon) == false){						// het moet een getal zijn
				messageWindow("Longitude MOET een getal zijn", "red");
			}
			else{
				console.log("2");
				// nu nog converteren waar nodig
				try{
					
					oppervlakte = Number(oppervlakte);
					oppervlakte.toFixed(2);
					
					populatie = Number(populatie);
					populatie.toFixed(0);				//halve mensen bestaan niet

					lat = Number(lat);
					lat.toFixed(2);
					
					lon = Number(lon);
					lon.toFixed(2);
					
					console.log("3");
					
				}catch(err){
					messageWindow("Error met converteren:" + err, "red");
				}
			
			
				/*============================================		========================================	
				   Alle checks/converts  nu (eindelijk) gehad   ==> 	Dan kan het de database in	
				  ============================================		========================================*/
				
				
				console.log("4");
					
				//eerst een data-object maken van alle ingevoerde gegevens voordat we deze naar de servervice sturen
				var data = { "kort": kort, "lang": lang, "land": naam, "capital": city, "continent": continent, "regio": regio,	"oppervlakte": oppervlakte, "populatie": populatie, "regering": regering, "latitude": lat, "longitude": lon};

					
				//omzetten naar een voor de servervice te begrijpen formaat
				var JSONdata = JSON.stringify(data);
				
			
				$.ajax("/firstapp/restservices/countries/"+lang,{
					type: "put",
					data: JSONdata,
				    beforeSend: function (xhr) { // je moet ingelogged zijn om het te mogen uitvoeren (token ophalen)
				        var token = window.sessionStorage.getItem("sessionToken");
				        xhr.setRequestHeader( 'Authorization', 'Bearer ' + token);
				    },

					success: function(response){
						randomSearch();
						$('#land-pagina').hide();
						$('#search').fadeIn(1000);
						messageWindow("Response:" + response.response, "green");


					},
					error: function(response){
						messageWindow("Response AJAX POST: " + response.response, "red");
					}
				});
			}			
		}catch(err){
			messageWindow("Error:" + err, "red");
		}		
	}
}	
	
	/*
	=================================================
		-8-			Functie: 	Land Verwijderen   ==>	DELETE REQUEST
	=================================================
	
*/	
	

	
function removeCountry(){
	
	//haal de code op van het land
	var landcode = $("#input-landcode-lang").val();
	console.log(landcode);
	
	//ook de hidden-field met landcode 
	//(als mensen ineens een andere landcode invullen die anders is dan het opgehaalde land)
	
	var hiddenLandcode = $("#hidden-code").val();
	console.log(hiddenLandcode);
	
	
	if(landcode != hiddenLandcode){
		messageWindow("Error: Je landcode klopt niet meer. Verander terug of laad de data opnieuw in" , "yellow");
	}
	else{// verwijder het land uit de database
		
		try{
			$.ajax("/firstapp/restservices/countries/"+landcode,{
				type: "delete",
				beforeSend: function (xhr) { // je moet ingelogged zijn om het te mogen uitvoeren (token ophalen)
			        var token = window.sessionStorage.getItem("sessionToken");
			        xhr.setRequestHeader( 'Authorization', 'Bearer ' + token);
			    },
			    
				success: function(response){
					$('#land-pagina').hide();
					$('#search').fadeIn(1000);
					messageWindow("Response:" + response.response, "green");


				},
				error: function(response){
					messageWindow("Response AJAX DELETE: " + response.response, "red");
				}
			});
		}
		catch(err){
			randomSearch();
			$('#land-pagina').hide();
			$('#search').fadeIn(1000);
			messageWindow("Server fout: " + response.response, "red");

		}
	}
}



/*
=================================================
	-9-			Functie: 	LOGIN 
=================================================

*/	




function userLogin(){
	
	

		var data = $('#login-form').serialize();
		$.post("/firstapp/restservices/authentication", data, function(response){
			window.sessionStorage.setItem("sessionToken", response);	

				$('#login').hide();
				$('#home').fadeIn(1000);


			
		}).fail(function(jqXHR, textStatus, errorThrown) {
		    console.log(textStatus);
		    console.log(errorThrown);
		  });	
}
	
	
	

