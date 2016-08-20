function log_out(){
 	localStorage.removeItem('userlogin');
 	 window.location.replace("index.html");
}


$(document).ready(function() {
	var user = localStorage.getItem('userlogin');
	
    $.getJSON("http://104.238.96.209/~newsimtms/db/get_user_details/"+user,function(result){
      $.each(result, function(i, field){
        $("#output").append("<tr><td>Username:  "+ field.username + " </td></tr><tr><td>Password: "+ field.password + "</td></tr>");
		$('#user_username').val(field.username);
		$('#user_password').val(field.password);
		$('#my_fname').text(field.fname);
		$('#fname').val(field.fname);
     });
    });
 });
 
 
function update_user(){
	var username = $('#user_username').val();
 	var fname = $('#fname').val();  
	
$.post( "http://104.238.96.209/~newsimtms/db/update/user", { username: username, fname: fname })
  .done(function( data ) {
		if(data == 0){
	 		$('#update_0').show(); 				
		}else if(data == 1){   
			$('#update_1').show(); 
			$('#my_fname').text(fname);
			//window.location.href = "user.html";
		}
  });
	
} 
 





$(function() {
  $('#maincontent').hide();
  setTimeout(hideSplash, 2000);
});

function hideSplash() {
  $( ".splash" ).fadeOut( "slow");
  $('#maincontent').fadeIn("slow");
}

//window.onload=function() { setTimeout(hideSplash, 2000); }