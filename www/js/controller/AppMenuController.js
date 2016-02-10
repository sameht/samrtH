appContext.controller('AppMenuController', function($state, $ionicPopover, $scope){

	//test if the user is authenticated
	var isAuthenticated = localStorage.getItem("isAuthenticated");
//	alert("isAuthenticated") ;
	if(! isAuthenticated)
		$state.go("login");
	else 
		console.log("home");

	$scope.logout=function(){
		//localStorage.clear(isAuthentified);
		localStorage.setItem("isAuthenticated", false);
            $state.go("login");
		console.log("deconnecter")
	}

	

	
})