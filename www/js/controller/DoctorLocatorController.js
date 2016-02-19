appContext.controller('DoctorLocatorController', function($scope, $state, $cordovaGeolocation){

	console.log("dsdsd")
	$scope.doctorArray = [];

	for (var i = 0; i <= 5; i++) {
		$scope.doctorArray[i]  = { name : "doctor"+i , address : "adresse"+i };
	};



     /****************     Map     ******************/
   var options = {timeout: 10000, enableHighAccuracy: true};
   console.log("Map")
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

   console.warn(position);

    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
   // var latLng = {lat: 35.7978203, lng :11.0346394};
 
    var mapOptions = {
      center: latLng,
      zoom: 15
      
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
    var marker = new google.maps.Marker({
      position: latLng,
      map: $scope.map,
      title: 'Hello World!'
    });

  }, function(error){
    console.log("Could not get location");
  });
  /*****************************************************/


})