function log_out(){
 	localStorage.removeItem('userlogin');
 	 window.location.replace("index.html");
}


$(document).ready(function() {
    $.getJSON("http://104.238.96.209/~newsimtms/json",function(result){
      $.each(result, function(i, field){
        $("#output").append("<tr><td>Username:  "+ field.username + " </td><td>Password: "+ field.password + "</td></tr>");
     });
    });
 });
 
 
 
 





$(function() {
  $('#maincontent').hide();
  setTimeout(hideSplash, 2000);
});

function hideSplash() {
  $( ".splash" ).fadeOut( "slow", function() {
    // Animation complete.
	$('#maincontent').fadeIn();
  });
}

//window.onload=function() { setTimeout(hideSplash, 2000); }