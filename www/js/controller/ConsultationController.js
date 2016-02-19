appContext.controller('ConsultationController', function($scope){
	
	$scope.consultationArray = [];

	for (var i = 0; i <= 5; i++) {
		$scope.consultationArray[i]  = { name : "consultation"+i , date : "date"+i, description:"la description de la consultation...."+i };
	};

})