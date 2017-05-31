$(document).ready(function(){
	
	
	$('#toevoegen').hide();
	$('#search').hide();

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
	
	
});


