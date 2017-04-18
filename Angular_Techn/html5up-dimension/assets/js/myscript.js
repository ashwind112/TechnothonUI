(function($) {
	
	$("#login").click(function(){
										if($("#username").val()=="user1" && $("#pass").val()=="password"){
											window.location.replace("#details");
										}
										else{alert("Some issue");}
									});
									
	 $("#logout").click(function(){
									 window.location.replace("#work");	
									 });
									 
	$("#username").onchange(function(){
										//would also be using some onblur method in it.
									});
	
	})(jQuery);
	
	
	
	
	
	
	
	
	
	

