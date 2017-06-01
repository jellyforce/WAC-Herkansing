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
	$('#messagebox').fadeIn(2000, function(){
		$('#messagebox').fadeOut(2000);
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
	
	/*var data = {  ""}*/
	
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
