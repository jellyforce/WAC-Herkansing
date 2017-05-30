$(document).ready(function(){
	
	
	initPage();
	

	
})



function initPage(){

	try{
	//receive JSON Data from API    (IP-API)
	 $.getJSON("http://ip-api.com/json/?callback=?", function(data){
		 
		 
		 
		 //Add IP-information to all corresponding elements in first section
		 $("#landcode").append(data.countryCode);
		 $("#land").append(data.country);
		 $("#regio").append(data.region);
		 $("#stad").append(data.city);
		 $("#postcode").append(data.zip);
		 $("#lat").append(data.lat);
		 $("#lon").append(data.lon);
		 $("#ip").append(data.query);
		 
		 
		 
		 //adding name of location to title of second section
		 $('#location').append(data.city);
		 
		 
		 
		 //call function to fill second section of web page with information from first API
		 //i've choose to use the latitude and longitude as parameters
		 weather(data.lat, data.lon,data.city);
		 
		 loadCountries();
		 
	 },"json");	
		}
	catch(err){
		throw new WebApplicationException(err);
		}
	}	 



function weather(latitude, longtitude,city){
	
	try{
		
	
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longtitude+"&q="+city+"&units=metric"+
				"&APPID=5acf2518f328c2d0e7158c0fff662dd1","jsonp", function(data){
		
		

		
		$("#temperatuur").append(data.main.temp);
		$("#luchvochtigheid").append(data.main.humidity + "%");
		$("#windsnelheid").append(data.wind.speed);
		$("#windrichting").append(data.wind.deg);
		$("#zonsopgang").append(data.sys.sunrise);
		$("#zonsondergang").append(data.sys.sunset);

	},"json");	
	}
	catch(err){
		throw new WebApplicationException(err);
	}
}


function loadCountries(){
	
	try{
		
	
	//receive information from own Country-API
	$.getJSON("http://localhost:8070/firstapp/restservices/countries", "jsonp" ,function(data){

	
		//create a variable which will hold all table rows
		var html ="";
		
		//for each piece of data in the JSON-object create a table row which holds its data and append it to the " HTML-variable "
		//also an event is added to each row called " loadCountries() "		
		
		//onclick='weather()'
		

		//html += "<tr><td>"+data.Land+"</td><td>"+data.capital+"</td><td>"+data.region+"</td><td>"+data.surface+"</td><td>"+data.population+"</td></tr>";
		
		//FUNCTION MOET EEN KEY/VALUE HEBBEN EN DEZE MOETEN (k,v) GENOEMAND WORDEN
		$.each(data, function(k, v){
			$('table').append("<tr onclick='weather("+v.latitude+","+v.longitude+","+v.capital+")'><td>"+v.Land+"</td><td>"+v.capital+"</td><td>"+v.region+"</td><td>"+v.surface+"</td><td>"+v.population+"</td></tr>");
			
			
			//laten stoppen bij pakistan
			return ( v.Land !== "Pakistan" );
			
		})
	
	},"json");
	}
	catch(err){
		throw new WebApplicationException(err);
	}
}
	