appContext.controller('SettingController', function($scope){

	$scope.ONOFF=function(comingRDV){
		if(comingRDV==true)
			$scope.ok="okiiiii";
	}
})