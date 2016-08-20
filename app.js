/*

// Store
localStorage.setItem("lastname", "Smith");
// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");

*/





function check_storage(){

	if (localStorage['userlogin']) {
		    window.location.replace("user.html");
		    console.log('goto user.html');
	}else{
			console.log('err');
		}

}
check_storage();


// register
function register(){

 	var username = $('#reg_username').val();
 	var password = $('#reg_password').val();
 	var fname = $('#reg_fname').val();
 	var lname = $('#reg_lastname').val();

 	if(username == '' || password == '' || fname == '' || lname == ''){

 		if(username == ''){ $('#reg_username_err').show(); }
 		if(password == ''){ $('#reg_password_err').show(); }
 		if(fname == ''){ $('#reg_fname_err').show(); }
 		if(lname == ''){ $('#reg_lname_err').show(); }

 	}else{

		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
		localStorage.setItem("fname", fname);
		localStorage.setItem("lname", lname);
		localStorage.setItem("userlogin", username);
		window.location.href = "user.html";
 	}

}

 
function login(){
		var user_name_input = $('#user_name_input').val();
		var user_pass_input = $('#user_pass_input').val();
/*
	if (localStorage['userlogin']) {
		    window.location.replace("user.html");
		    console.log('goto user.html');
	}else{

		var user_name_input = $('#user_pass_input').val();
		var user_pass_input = $('#user_pass_input').val();
			 
		var username = localStorage.getItem("username");
		var password = localStorage.getItem("password");


 		if(user_name_input == '' || user_pass_input == ''){
	 		if(user_name_input == ''){ $('#login_username').show(); }
	 		if(user_name_input == ''){ $('#login_password').show(); }
		}else{
			if(user_name_input == username && user_name_input == password){
				localStorage.setItem("userlogin", username);
				window.location.href = "user.html";
			}else{
	 		$('#login_username_error').show(); 
	 		$('#login_password_error').show(); 	
	 		console.log('user error');			
			}			
		}
}
*/

$.post( "http://104.238.96.209/~newsimtms/db/loginuser", { username: user_name_input, password: user_pass_input })
  .done(function( data ) {
		if(data == 0){
	 		$('#login_username_error').show(); 
	 		$('#login_password_error').show(); 				
		}else if(data == 1){   
			localStorage.setItem("userlogin", user_name_input);
			window.location.href = "user.html";
		}
  });

}















$(function() {
  //$('#maincontent').hide();
  //setTimeout(hideSplash, 2000);
});

function hideSplash() {
  $( ".splash" ).fadeOut( "slow");
  $('#maincontent').fadeIn("slow");
}

//window.onload=function() { setTimeout(hideSplash, 2000); }

 