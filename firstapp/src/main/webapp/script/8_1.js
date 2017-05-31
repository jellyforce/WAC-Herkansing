$(document).ready(function(){
	
	//verbergen van elementen
	$('#toevoegen').hide();
	$('#search').hide();
	$('#land-pagina').hide();
	
	

	
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
	
/*
	=================================================
		-1-			Functie: 	1  Land ophalen
	=================================================
	
*/
	
function landOphalen(code){
		
		
		
	showCountryPage();
		
		
		
		
/*		$.getJSON("http://localhost:8070/firstapp/restservices/countries/"+code,+"jsonp" ,function(data){			

			
		// vullen van de section met id="land-pagina"
			
			
			
			
			
			
	}),"json"}*/
		
}	
	
	
/*
	=================================================
		-2-			Functie: 	Alle landen ophalen
	=================================================
	
*/	
	
function alleLanden(){
		

	$.getJSON("http://localhost:8070/firstapp/restservices/countries","jsonp" ,function(data){			
		$.each(data, function(k, v){
			$('tbody').append("<tr onclick= 'landOphalen(\"" + v.code + "\");'><td>"+v.Land+"</td><td>"+v.code+"</td><td>"+v.capital+"</td><td>"+v.continent+"</td><td>"+v.region+"</td><td>"+v.surface+"</td><td>"+v.population+"</td><td>"+v.government+"</td><td>"+v.latitude+"</td><td>"+v.longitude+"</td></tr>");
		});			
}),"json"}
	




	
	
	
/*
	=================================================
		-3-			Functie: 	Oppervlakte ophalen
	=================================================
	
*/	
		
function grootsteOppervlaktes(){
		
	alert('oppervlaktes');
}
	
	
	
	
/*
	=================================================
		-4-			Functie: 	Populatie ophalen
	=================================================
	
*/	
		
	
function grootstePopulaties(){
		
		
	alert('populaties');
}
	
	
	
/*
	=================================================
		-5-			Functie: 	RandomSearch
	=================================================
	
*/
	
	
	
	
	
	
	
/*
	=================================================
		-6-			Functie: 	Land aanmaken		==> POST REQUEST
	=================================================
	
*/	
	
	
	
	
	
	/*
	=================================================
		-7-			Functie: 	Land Verwijderen   ==>	DELETE REQUEST
	=================================================
	
*/	
	
		
	

	
	
	
	/*
	=================================================
		-8-			Functie: 	Land wijzigen 		==>  PUT REQUEST
	=================================================
	
*/	
	
		

	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	



