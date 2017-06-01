$(document).ready(function(){
	
	//verbergen van elementen
	$('#toevoegen').hide();
	$('#search').hide();
	$('#land-pagina').hide();
	$('#messagebox').hide();
	
	

	
//einde startup	
});
	
	


//home-knop
$("#menu-home").click(function(){
	$('#home').hide();
	$('#toevoegen').hide();
	$('#search').hide();
	$('#home').fadeIn(1000);
});


//add-knop
$('#menu-item1').click(function(){
	$('#home').hide();
	$('#toevoegen').hide();
	$('#search').hide();
	$('#toevoegen').fadeIn(1000);
});

//search-knop
$('#menu-item2').click(function(){
	$('#home').hide();
	$('#toevoegen').hide();
	$('#search').hide();	
	$('#search').fadeIn(1000);
});
	

function showCountryPage(){
	$('#home').hide();
	$('#toevoegen').hide();
	$('#search').hide();	
	$('#land-pagina').fadeIn(1000);
}	
	
function closeCountryPage(){
	$('#home').hide();
	$('#toevoegen').hide();
	$('#land-pagina').hide();	
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
			
			document.getElementById("input-landcode").value = data.code;
			document.getElementById("input-land_naam").value = data.Land;
			document.getElementById("input-hoofdstad").value = data.capital;
			document.getElementById("input-continent").value = data.continent;
			document.getElementById("input-regio").value = data.region;
			document.getElementById("input-oppervlakte").value = data.surface;
			document.getElementById("input-populatie").value = data.population;
			document.getElementById("input-regering").value = data.gouvernment;
			document.getElementById("input-latitude").value = data.latitude;
			document.getElementById("input-longtitude").value = data.longitude;
			document.getElementById("land-invoer-header").append(data.name);
			
			
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
				$('tbody').append("<tr onclick= 'landOphalen(\"" + v.code + "\");'><td><div>"+v.Land+"</div></td><td><div>"+v.code+"</div></td><td><div>"+v.capital+"</div></td><td><div>"+v.continent+"</div></td><td><div>"+v.region+"</div></td><td><div>"+v.surface+"</div></td><td><div>"+v.population+"</div></td><td><div>"+v.government+"</div></td><td><div>"+v.latitude+"</div></td><td><div>"+v.longitude+"</div></td></tr>");
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
				$('tbody').append("<tr onclick= 'landOphalen(\"" + v.code + "\");'><td><div>"+v.Land+"</div></td><td><div>"+v.code+"</div></td><td><div>"+v.capital+"</div></td><td><div>"+v.continent+"</div></td><td><div>"+v.region+"</div></td><td><div>"+v.surface+"</div></td><td><div>"+v.population+"</div></td><td><div>"+v.government+"</div></td><td><div>"+v.latitude+"</div></td><td><div>"+v.longitude+"</div></td></tr>");
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
				$('tbody').append("<tr onclick= 'landOphalen(\"" + v.code + "\");'><td><div>"+v.Land+"</div></td><td><div>"+v.code+"</div></td><td><div>"+v.capital+"</div></td><td><div>"+v.continent+"</div></td><td><div>"+v.region+"</div></td><td><div>"+v.surface+"</div></td><td><div>"+v.population+"</div></td><td><div>"+v.government+"</div></td><td><div>"+v.latitude+"</div></td><td><div>"+v.longitude+"</div></td></tr>");
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
					
					$('tbody').append("<tr onclick= 'landOphalen(\"" + v.code + "\");'><td><div>"+v.Land+"</div></td><td><div>"+v.code+"</div></td><td><div>"+v.capital+"</div></td><td><div>"+v.continent+"</div></td><td><div>"+v.region+"</div></td><td><div>"+v.surface+"</div></td><td><div>"+v.population+"</div></td><td><div>"+v.government+"</div></td><td><div>"+v.latitude+"</div></td><td><div>"+v.longitude+"</div></td></tr>");
							
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
		var hoofd = $('#landhoofd').val();
		var lat = $('#latitude').val();
		var lon  = $('#longtitude').val();
		
		//converten/checks op alle data 
		
		try{//kort
			console.log("check-2");
			kort.length <= 2;
			console.log("check-3");
		}catch(err){
			//popup met de error		
			messageWindow("landcode (kort) is MAX 2 tekens", "red");
		}
		
		try{//lang
			(kort.length() <= 3) == true;
		}catch(err){	
			messageWindow("landcode (lang) is MAX 3 tekens", "red");
		}
		
		try{//land naam
			(naam.length() <= 52) == true;
		}catch(err){
			messageWindow("landnaam is MAX 52 tekens", "red");
		}
		
		try{//hoofdstad
			(city.length() > 0) == true;
		}catch(err){
			messageWindow("Je moet een hoofdstad invullen", "red");
		}
		
		try{//continent
		
			var continentList = [ 'Europe' , 'Asia' , 'South America' , 'Antarctica' , 'North America' , 'Oceania' , 'Africa'  ];
			(continentList.indexOf(continent) > -1) == true;
		
		}catch(err){
			messageWindow("Geldige continenten zijn : Europe , Asia , South America , North America , Oceania , Africa , Antarctica ", "red");

		}
		
		try{//regio
			(regio.length() <= 26) == true;
		}catch(err){
			messageWindow("Regio is MAX 26 tekens", "red");
		}
		
		
		try{//oppervlakte			
			oppervlakte = parseInt(oppervlakte); 		// string to integer
			oppervlakte.toFixed(2);						// max 2 achter de comma			
		}catch(err){
			messageWindow("Oppervlakte MOET een getal zijn", "red");
		}
		
		try{//populatie			
			populatie = parseInt(populatie);			// String to int
			populatie.toFixed(0);						// max 2 achter de comma  --> halve mensen bestaan niet :)			
		}catch(err){
			messageWindow("Populatie MOET een getal zijn", "red");
		}
		
		try{//regering			
			(regering.length() <= 45) == true;			
		}catch(err){
			messageWindow("Regering is MAX 45 tekens","red");
		}
		
		try{//hoofd			
			(hoofd.length() <= 60) == true;			
		}catch(err){
			messageWindow("Staatshoofd is MAX 60 tekens","red");		}
		
		try{//latitude
			lat = parseInt(oppervlakte); 		// string to integer
			lat.toFixed(2);						// max 2 achter de comma
		}catch(err){
			
		}
		
		try{//longitude
			lon = parseInt(oppervlakte); 		// string to integer
			lon.toFixed(2);						// max 2 achter de comma
		}catch(err){
			
		}
									/*============================================		
												Alle checks gehad		
									============================================*/
		
		
		
		
		
		
		
		
		
	}catch(err){
		
	}
	
	
	
/*	
	
	//eerst een data-object maken van alle ingevoerde gegevens voordat we deze naar de servervice sturen
	var data = { "kort": $('#landcode-kort').val(), "lang": $('#landcode-lang'), "land": $('#land_naam').val(), "capital": $('#hoofdstad').val(), "continent": $('#continent').val(), "regio": $('#regio').val(), "oppervlakte": $('#oppervlakte').val(), "populatie": $('#populatie').val(), "regering": $('#regering').val(), "landhoofd": $('#landhoofd').val(), "latitude": $('#latitude').val(), "longtitude": $('#longtitude').val()}
	
	//omzetten naar een voor de servervice te begrijpen formaat
	var JSONdata = JSON.stringify("DATA: " +data);	

	
    $.post("/firstapp/restservices/customer", JSONdata, function(response) {
        $("#response").text(JSON.stringify(response));
    }); */


}
	
	
	
	/*
	=================================================
		-7-			Functie: 	Land Verwijderen   ==>	DELETE REQUEST
	=================================================
	
*/	
	
		
	
function removeCountry(){
	
	
	
}
	
	
	
	/*
	=================================================
		-8-			Functie: 	Land wijzigen 		==>  PUT REQUEST
	=================================================
	
*/	
	

function adjustCountry(){
	
	
}
