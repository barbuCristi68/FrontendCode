hrApp.controller('UserController',  ['$scope','$location', function ($scope,$location){
    $scope.back = function() {
        $location.url('main');
    }

    $scope.users = [];

    $scope.reset=function(){
        $scope.FirstName = undefined;
        $scope.LastName = undefined;
        $scope.CNP = undefined;
        $scope.Age = undefined;
    }
    $scope.save=function(){
        $scope.user={};
        $scope.user.FirstName = $scope.FirstName;
        $scope.user.LastName = $scope.LastName;
        $scope.user.CNP = $scope.CNP;
        $scope.user.Age = $scope.Age;
        $scope.users.push($scope.user);
        alert("Added:" + $scope.user.FirstName + " " + $scope.user.LastName );
    }
$scope.myValue = false;
    $scope.show=function(){
        if ($scope.myValue !== false) {
            $scope.myValue = false;
        } else {
            $scope.myValue = true;
        }
    };
    }]);
