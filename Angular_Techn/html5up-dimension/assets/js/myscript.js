(function($) {	

	
	

	$("#login").click(function(){

		if(true || $("#username")=="user1" && $("#pass")=="password"){
		   var name = $("#username").val();
		   var role=$('#role').val();
		   localStorage.setItem('username',name);
		   localStorage.setItem('role',role);
		   window.location.replace("#details");
		}
	});
	
	$("#reporttype1").change(function() {

	 	$("#kidney").show();
	 	$("#diabetes").show();
	 
	 	var selection=($(this)).val();		
	 	switch(selection){
	 		case "kidney":
	 		$("#kidney").slideDown();
	 		$("#diabetes").slideUp();
	 			
					   //$("#kidney").toggle();
					
	 			//$("#kidney").show('slow/400/fast', function() {
	 				
	 			//});
	 			//$("#diabetes").css('display', 'none');
	 			
	 			break;
	 		case "diabetes":

	 			$("#diabetes").slideDown();
	 			//$("#kidney").css('display', 'none');
	 			$("#kidney").slideUp();
	 			break;
	 		case "base":
	 			$("#kidney").slideUp();
	 			$("#diabetes").slideUp();
	 			break;
	 	}
	 });
	$("#Signup").click(function(){
		window.location.replace("#work");
	});

	

	 $("#logout").click(function(){
	 	window.location.replace("#work");
	  });


	 
})(jQuery);
	
	
	
	
	
	
	
	
	
	

