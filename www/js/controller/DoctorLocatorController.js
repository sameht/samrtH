appContext.controller('DoctorLocatorController', function($scope, $state, $cordovaGeolocation){

	console.log("dsdsd")
	$scope.doctorArray = [];

	for (var i = 0; i <= 5; i++) {
		$scope.doctorArray[i]  = { name : "doctor"+i , address : "adresse"+i };
	};

	var posOptions = {timeout: 10000, enableHighAccuracy: false};
  	$cordovaGeolocation
    .getCurrentPosition(posOptions)
    	.then(function (position) {
      		var lat  = position.coords.latitude
      		var long = position.coords.longitude
    	}, function(err) {
      // error
    });

     /****************     Map     ******************/
   var options = {timeout: 10000, enableHighAccuracy: true};
   console.log("Map")
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
  }, function(error){
    console.log("Could not get location");
  });
  /*****************************************************/


})