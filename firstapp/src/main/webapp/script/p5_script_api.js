$(document).ready(function(){
	
	
	initPage();
	

	
	
});






function initPage(){

	console.log("-1- initpage functie gestart");
	//receive JSON Data from API    (IP-API)
	 $.getJSON("http://ip-api.com/json/?callback=?", function(data){
		 
		 console.log("-2- ip-gegevens opgehaald");
		 
		 //Add IP-information to all corresponding elements in first section
		 document.getElementById("landcode").innerHTML = data.countryCode;
		 document.getElementById("land").innerHTML = data.country;
		 document.getElementById("regio").innerHTML = data.region;
		 document.getElementById("stad").innerHTML =  "<div class=\"stad\" onclick= 'weather(\"" + data.lat + "\", \"" + data.lon + "\", \""  + data.city + "\");'>" + data.city + "</div>";
		 document.getElementById("postcode").innerHTML = data.zip;
		 document.getElementById("lat").innerHTML = data.lat;
		 document.getElementById("lon").innerHTML = data.lon;
		 document.getElementById("ip").innerHTML = data.query;
		 
		 
		 
		 //adding name of location to title of second section
		 $('#location').append(data.city);
		 
		 console.log("-3- ip-gegevens toegevoegd aan de html elementen");
		 
		 //call function to fill second section of web page with information from first API
		 //i've choose to use the latitude and longitude as parameters
		 
		 weather(data.lat, data.lon,data.city);
		 
		 
		 loadCountries();
		 
	 },"json");	
	}	 








function weather(latitude, longtitude,city){
	console.log("-4- de weather functie is gestart");

	
	//bestaat er uberhaupt wel iets in de sessie die de naam van de stad heeft?
	if(window.sessionStorage.getItem(city) != null){
		
		console.log("-4.- ja: er bestaat idd data in de sessie met deze naam");
		
		// sla deze data op in een variabele, dit is een array [de data, de tijd]
		var arrayCity = JSON.parse(window.sessionStorage.getItem(city));
		
		console.log("type of json result uit session: " +arrayCity);

		data = arrayCity.jsondata;
		date = arrayCity.datum;

		
		

		
		//is dit langer als 10 minuten geleden?
		// dan halen we het opnieuw op bij de api and vullen we opnieuw de sessie:
		
		if(tenMinutesAgo(date) == true){
		
			
			$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longtitude+"&q="+city+"&units=metric"+
						"&APPID=5acf2518f328c2d0e7158c0fff662dd1", function(data){

				console.log("-5- data is opgehaald uit de api");
				console.log("-6- de opgehaalde data(land): " + data.Land);
				
				console.log("type of json result van weatherapi: " +data);
				
				//alle elementen vullen in de html
				
				document.getElementById("temperatuur").innerHTML = data.main.temp + " \u00b0C";
				document.getElementById("luchvochtigheid").innerHTML = data.main.humidity + "%";
				document.getElementById("windsnelheid").innerHTML = (data.wind.speed /3.6) + "m/s";
				document.getElementById("windrichting").innerHTML = data.wind.deg;
				document.getElementById("zonsopgang").innerHTML = stringToTime(data.sys.sunrise);
				document.getElementById("zonsondergang").innerHTML = stringToTime(data.sys.sunset);
				document.getElementById("location").innerHTML = (data.name);
				
				console.log("-11- de elementen zijn gevuld met de data");
				
				
				//alles opslaan in de sessionStorage zodat 
				//we het niet nog een x hoeven op te halen als dat niet nodig is
				//we hebben ook de tijd nodig (eens per 10 minuten mag er een request komen)
				
				//currentDate aanmaken
				var requestDate = new Date(); 
				console.log("-7- == current date object  ==" + requestDate);
				
				//het array-object dat in de sessie komt te staan met de data en bijbehorende datum(tijd)
				var array = {};
				
				//voeg alles toe aan de array
				array.jsondata = data;
				array.datum = requestDate;
				
				
				
	
				
				
				
				
				
				//de array slaan we nu op in de sessie onder de naam van het land
				//zo kunnen we straks herkennen of deze al eens is opgevraagd en zo ja, hoe lang geleden
				
				//data moet weer om worden gezet naar een JSONstring, anders gaat het NIET WERKEN
				window.sessionStorage.setItem(city, JSON.stringify(array));

				console.log("-8- de stad data is opgeslagen in de sessie met de tijd erbij");
			    
				console.log("-9- einde van if-statement in de weather functie");
			
				
			},"json");
			
		}	
		
		
		
			
		// is dit binnen de 10 minuten marge?
		// dan halen we het op uit de sessie:
		// hiervoor gebruiken we de data die bovenaan de functie al gedefineerd is
			
		else{
			console.log("-10- in de else-statement van de weather functie, het komt nu uit de sessie");
			
			//console.log("-10.1- we halen de data uit de sessie en parsen deze met JSON.parse()");
			// sla deze data op in een variabele, dit is een array [de data, de tijd]
/*			var arrayCity = JSON.parse(window.sessionStorage.getItem(city));

			
			console.log("-10.2- data is opgehaald en geparsed");


			data = arrayCity[0];*/
			
			
			console.log("-11- de data plaatsen we in de elementen");
			//alle elementen vullen in de html met de data uit de sessiontorage
			
			document.getElementById("temperatuur").innerHTML = data.main.temp + " \u00b0C";
			document.getElementById("luchvochtigheid").innerHTML = data.main.humidity + "%";
			document.getElementById("windsnelheid").innerHTML = (data.wind.speed /3.6) + "m/s";
			document.getElementById("windrichting").innerHTML = data.wind.deg;
			document.getElementById("zonsopgang").innerHTML = stringToTime(data.sys.sunrise);
			document.getElementById("zonsondergang").innerHTML = stringToTime(data.sys.sunset);
			document.getElementById("location").innerHTML = (data.name);
			
			console.log("-12- de data is nu in de elementen geplaatst");
			
			console.log("-13- einde van de else-statement in de weather functie");
			
			
		}		
	}
	
	
	

	
	// er bestaat nog niks in de sessie die deze naam bevat ( we gaan dus data ophalen bij de api en vullen we de sessie)
	else{
		console.log("-14- NEE : er bestaat nog GEEN data in de sessie met deze naam");
		
		console.log("-14.1- we gaan de date ophalen bij de api");

		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longtitude+"&q="+city+"&units=metric"+
				"&APPID=5acf2518f328c2d0e7158c0fff662dd1", function(data){

		console.log("-15- data is opgehaald uit de api");
		
		console.log("type of json result van weatherapi: " +data);
		
		console.log("-16- de opgehaalde data voorbeeld (city): " + data.name);
		
		
		
		//alle elementen vullen in de html
		
		document.getElementById("temperatuur").innerHTML = data.main.temp + " \u00b0C";
		document.getElementById("luchvochtigheid").innerHTML = data.main.humidity + "%";
		document.getElementById("windsnelheid").innerHTML = (data.wind.speed /3.6) + "m/s";
		document.getElementById("windrichting").innerHTML = data.wind.deg;
		document.getElementById("zonsopgang").innerHTML = stringToTime(data.sys.sunrise);
		document.getElementById("zonsondergang").innerHTML = stringToTime(data.sys.sunset);
		document.getElementById("location").innerHTML = (data.name);

		console.log("-17- de elementen zijn gevuld met de data");
		
		
		//alles opslaan in de sessionStorage zodat 
		//we het niet nog een x hoeven op te halen als dat niet nodig is
		//we hebben ook de tijd nodig (eens per 10 minuten mag er een request komen)
		
		//currentDate aanmaken
		var requestDate = new Date(); 
		console.log("-18- == current date object  ==" + requestDate);
		
		//het json-object dat in de sessie komt te staan met de data en bijbehorende datum(tijd)
		var array = {};
		array.jsondata = data;
		array.datum = requestDate;
		
/*		//voeg alles toe aan de array
		array.push(data);
		array.push(requestDate);	
		*/
		
		
		//de JSONarray slaan we nu op in de sessie onder de naam van het land
		//zo kunnen we straks herkennen of deze al eens is opgevraagd en zo ja, hoe lang geleden
		
		//data moet weer om worden gezet naar een JSONstring, anders gaat het NIET WERKEN
		window.sessionStorage.setItem(city, JSON.stringify(array));

		console.log("-19- de stad data is opgeslagen in de sessie met de tijd erbij");	    
		console.log("-20- einde van if-statement in de weather functie");
	
		
	},"json");
		
		
	}
}











function loadCountries(){
	
	console.log("-21- loadCounties functie gestart");	
	
	//receive information from own Country-API
	$.getJSON("http://localhost:8070/firstapp/restservices/countries","jsonp" ,function(data){

		console.log("-22- data is opgehaald uit de api");
		//for each piece of data in the JSON-object create a table row which holds its data and append it to the " HTML-variable "
		//also an event is added to each row called " loadCountries() "		

		
		//FUNCTION MOET EEN KEY/VALUE HEBBEN en deze noemen we (k,v) 
		$.each(data, function(k, v){
			var latitude = v.latitude;
			console.log("latitude: " + latitude);
			console.log("latitude type: " + typeof latitude);
			var longitude = v.longitude;
			console.log("longitude: "+ longitude);
			console.log("longitude type: "+ typeof longitude);
			var stad = v.capital;
			console.log("city: " + stad);
			console.log("city type: " + typeof stad);
			
			
			console.log("-23- de each functie in loadCountries");
			//weather("+v.latitude+","+v.longitude+","+v.capital+",)
			$('table').append("<tr onclick= 'weather(\"" + latitude + "\", \"" + longitude + "\", \""  + stad + "\");'><td>"+v.Land+"</td><td>"+v.capital+"</td><td>"+v.region+"</td><td>"+v.surface+"</td><td>"+v.population+"</td></tr>");
			
			
			
			

			
			
			
			
			
			
			
			
			//laten stoppen bij pakistan
			return ( v.Land !== "Pakistan" );
			
			
			console.log("-24- alle rows met landenzijn toegevoegd");
			console.log("-25- einde loadCountries functie");
			
		});
		
	},"json");
}





function stringToTime(seconds){	
	console.log("-26- string van secondes omrekenen naar tijd");
	
	return (new Date(seconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
}





function tenMinutesAgo(date){
	var oldDate = parseDate(date);
	console.log("-27- 10 minuten functie is gestart");	
	console.log("-28- inputDate  :"+ oldDate);
	console.log("-28- ObjectType of inputDate  :"+ typeof oldDate);

	
	
	var Ten_Minutes = 60*10*1000; // 10 minuten in ms
	// tijd van nu als string omdat de datums anders niet gelijk zijn aan elkaar
	var currentDate = JSON.stringify(new Date()); 
	// en ook weer parsen
	var dateNow = parseDate(currentDate);
	
	
	console.log("-28.2- currentDate  :"+ dateNow);
	console.log("-28.2- ObjectType of currentDate  :"+ typeof dateNow);

	
	var difference = dateNow - oldDate; // verschil in tijd in milliseconds
	console.log("verschil in tijd(miliseconde): " + difference);
	console.log("ObjectType of difference " + typeof difference);

	
	// is de date minimaal 10 minuten geleden t.o.v. de currentDate?
	
	if(difference >= Ten_Minutes){ // dan is het NIET minimaal 10 minuten geleden
		console.log("-29- het is langer als 10 minuten geleden of er was nog geen datum");
		return true;
	}
	else{ // minimaal 10 minuten geleden of geen datum(miliseconde = 0)
		console.log("-30- het is niet langer als 10 minuten geleden");
		return false;
	}	

}


//parse a date in yyyy-mm-dd format
function parseDate(input) {
	console.log("date-input in parseDate(): "+ input);	
  var parts = input.match(/(\d+)/g);
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[0], parts[1]-1, parts[2], parts[3], parts[4], parts[5], parts[6]); // months are 0-based
}

