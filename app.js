
$(document).ready(function() {

$.ajax({
	    type : 'GET',
	  	url : 'https://cors-anywhere.herokuapp.com/https://api.infojobs.net/api/1/offer?province=Madrid&city=Madrid&maxResults=100',
	    dataType : 'json',
	    headers: {	'Authorization': 'Basic YjVjM2IxODg5NmQ0NDcyODk4ZjM3YjQzZTg0ZmEzZDE6L2syQTdDQUVCMCtTRW9DQWc0RGFId2Y4MmUzZ1lHck51TWdsRWVTRFdzNUtCa1kzNVg=' },
	   	contentType: "application/json",
	    success : function (data) {		
			console.log(data);
			//$('#uno').text(JSON.stringify(data.offers))
			var tbl=$("<table/>").attr("id","mytable");
			$("#uno").append(tbl);
			for(var i=0;i<data.offers.length;i++){
				var tr="<tr>";
				var td1="<td>"+data.offers[i]["published"]+"</td>";
				var td2="<td>"+data.offers[i]["title"]+"</td>";
				var td3="<td><a href ="+data.offers[i]["link"]+"> Link</td></tr>";

				$("#mytable").append(tr+td1+td2+td3); 

				}
	    },
	    error : function (data, errorThrown) {
	      console.log(":(");
	    }

	});

setInterval(function() {
    cache_clear()
  }, 30000);



});


function cache_clear() {
  window.location.reload(true);
  // window.location.reload(); use this if you do not remove cache



}



























/*


var request = new XMLHttpRequest();
request.open('GET', 'https://api.infojobs.net/api/1/offer/', true);
request.setRequestHeader('Authorization', 'Basic YjVjM2IxODg5NmQ0NDcyODk4ZjM3YjQzZTg0ZmEzZDE6L2syQTdDQUVCMCtTRW9DQWc0RGFId2Y4MmUzZ1lHck51TWdsRWVTRFdzNUtCa1kzNVg=');
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var resp = request.responseText;
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
  console.log(":(")
};

request.send();

$(document).ready(function() {

$.ajax({
	    type : 'GET',
	  	url : 'https://api.infojobs.net/api/1/offer/',
	    dataType : 'json',
	    headers: {	'Authorization': 'Basic YjVjM2IxODg5NmQ0NDcyODk4ZjM3YjQzZTg0ZmEzZDE6L2syQTdDQUVCMCtTRW9DQWc0RGFId2Y4MmUzZ1lHck51TWdsRWVTRFdzNUtCa1kzNVg=' },
	    //contentType: "application/json",
	    
	    success : function (data) {
	      console.log(data);
	    },
	    error : function (data, errorThrown) {
	      console.log("sin suerte");
	    }
	});

});



$.ajax({
	    type : 'GET',
	  	url : 'https://api.infojobs.net/api/1/offer?province=Madrid/',
	    dataType : 'jsonp',
	    headers: {	'Authorization': 'Basic YjVjM2IxODg5NmQ0NDcyODk4ZjM3YjQzZTg0ZmEzZDE6L2syQTdDQUVCMCtTRW9DQWc0RGFId2Y4MmUzZ1lHck51TWdsRWVTRFdzNUtCa1kzNVg=' },
	    //contentType: "application/json",
	    
	    success : function (data) {
	      console.log(data);
	    },
	    error : function (data, errorThrown) {
	      console.log("sin suerte");
	    }
	});


$.ajax({
	    type : 'GET',
	  	url : 'https://api.infojobs.net/api/1/offer?province=Madrid/',
	    dataType : 'json',
	    contentType: "application/json",
	    headers: {	'Authorization': 'Basic YjVjM2IxODg5NmQ0NDcyODk4ZjM3YjQzZTg0ZmEzZDE6L2syQTdDQUVCMCtTRW9DQWc0RGFId2Y4MmUzZ1lHck51TWdsRWVTRFdzNUtCa1kzNVg=' },
	    //contentType: "application/json",
	    
	    success : function (data) {
	      console.log(data);
	    },
	    error : function (data, errorThrown) {
	      console.log("sin suerte");
	    }
	});




$.ajax({
    url: 'https://api.infojobs.net/api/1/offer?province=Madrid/',
    headers: {
        'Authorization':'Basic YjVjM2IxODg5NmQ0NDcyODk4ZjM3YjQzZTg0ZmEzZDE6L2syQTdDQUVCMCtTRW9DQWc0RGFId2Y4MmUzZ1lHck51TWdsRWVTRFdzNUtCa1kzNVg=',
        //'X_CSRF_TOKEN':'xxxxxxxxxxxxxxxxxxxx',
        'Content-Type':'application/json'
    },
    method: 'GET',
    dataType: 'json',
    //data: YourData,
    success: function(data){
      console.log('succes: '+data);
    }
  });*/