hrApp.controller('ScopesController',['$rootScope','$scope',function($rootScope,$scope) {

    $scope.title = 'Two way binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function () {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function (val) {
        $scope.firstVariable = val;
    };

}]);