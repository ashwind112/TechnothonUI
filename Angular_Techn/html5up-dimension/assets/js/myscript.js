(function($) {
	function User(){
		this.username="";
		this.password="";
	}
	
	$("#login").click(function(){

										var user= new User();

										var user=$("#username").val();
										var pass=$("#pass").val();
										user.username=user;
										user.password=pass;
										$.ajax({
										    url: "https://localhost:3000/checkUser",
										    type: 'POST',
										    content-type:'application/json',
										    data: JSON.stringify(user),
										    success: function(data){
										    		
										      if(data=="true"){
										      	window.location.replace("#details");
										      }
										    },
										});
									});

	 $("#logout").click(function(){
									 window.location.replace("#work");	
									 });
									 
	$("#username").onchange(function(){
										//would also be using some onblur method in it.
									});

	
    $("#report-type").change(function(){ 
        var element = $(this).find('option:selected'); 
        var myTag = element.attr("myTag"); 

        $('#setMyTag').val(myTag); 
    }); 

});
	
	})(jQuery);
	
	
	
	
	
	
	
	
	
	

