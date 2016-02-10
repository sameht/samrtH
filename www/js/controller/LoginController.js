appContext.controller('LoginController', function($scope, $ionicLoading, $state) {


    $scope.signin = function(user) {
        console.log(user)
        if (!user) {

            $ionicLoading.show({
                template: 'Veuillez remplir tout les champs'
            });

            setTimeout(function() {
                $ionicLoading.hide()
            }, 1700);

        } else if (!user.password || user.password =="undefined") {
            $ionicLoading.show({
                template: 'Veuillez introduire votre mot de pass'
            });

            setTimeout(function() {
                $ionicLoading.hide()
            }, 1700);

        } else if(!user.email || user.email =="undefined" || ! validateEmail(user.email) )  {
            $ionicLoading.show({
                template: 'Veuillez introduire votre email'
            });

            setTimeout(function() {
                $ionicLoading.hide()
            }, 1700);
        }else{

            //here goes your code
            localStorage.setItem("isAuthenticated", true);
            $state.go("appMenu.home");
        };
    };



function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


})