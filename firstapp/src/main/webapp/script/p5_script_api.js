$(document).ready(function(){
	
	
	initPage();
	
	getIP();
	
})



function initPage(){

	 $.getJSON("http://ip-api.com/json/?callback=?", function(data){
		 $("#landcode").append(data.countryCode);
		 $("#land").append(data.country);
		 $("#regio").append(data.region);
		 $("#stad").append(data.city);
		 $("#postcode").append(data.zip);
		 $("#lat").append(data.lat);
		 $("#lon").append(data.lon);
		 $("#ip").append(data.query);


		 
	 },'json');

	
	 
	 
	 
}

function getIP(json) {
    alert("My public IP address is: ", json.ip);
  }
