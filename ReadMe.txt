$(document).ready(function() {
    $.getJSON("http://phonegappro.esy.es/test/json.php",function(result){
      $.each(result, function(i, field){
        $("#output").append("Title: "+ field.title + " duration: "+field.duration +" Price:"+field.price+"<br/>");
     });
    });
 });
 
 
 https://phonegappro.com/tutorials/how-to-parse-read-json-using-phonegap-apache-cordova/
 
 
 	$get = DB::table('user')->get();
	return Response::json($get);


			'database'  => 'newsimtm_profile',
			'username'  => 'newsimtm_user',
			'password'  => 'Newsimtms123!321!',