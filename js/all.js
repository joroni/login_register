
$(function() {			
//Enable swiping...
$("#swipe_menu").swipe( {
	//Generic swipe handler for all directions
	swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
		 if(direction == 'right'){
			 console.log('open menu');
			 $('.mdl-layout__drawer-button').trigger('click');
		 }
	},
	//Default is 75px, set to 0 for demo so any distance triggers swipe
   threshold:0
});
});

 
 
 

function noNet(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success){
                    success(JSON.parse(xhr.responseText));
					}
            }else {
				window.location.replace("nonet.html");
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
} 
 
 
 
noNet('http://104.238.96.209/~newsimtms/db/json.php',
         function(data) {
				for(i = 0; i < data.length; i++) {
					//document.getElementById("result1").innerHTML += '<li> ' + data[i]['name'] + '</li>';
					console.log(data[i]['name']);
				}		
		 } 
);

  