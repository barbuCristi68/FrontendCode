hrApp.controller('MathController', ['$scope', 'MathService', function($scope,MathService){
    
    $scope.calculate = function() {
//        TODO #8 ocalculate op1, op2, op3, op4

 $scope.op1 = MathService.add($scope.a, $scope.b);
 $scope.op2 = MathService.substract($scope.a, $scope.b);
 $scope.op3 = MathService.multiply($scope.a, $scope.b);
 $scope.op4 = MathService.division($scope.a, $scope.b);
//        TODO #13 refactor your calculations using MathService

    }

}]);
