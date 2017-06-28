hrApp.controller('DescriptionController',['$rootScope','$scope',function($rootScope,$scope){

$scope.title='Two way binding Demo';
$scope.childtemplate='templates/childscope.html';
$scope.resetFirstVariable=function(){
    $scope.firstVariable=undefined;
};
$scope.setFirstVariable=function(val){
    $scope.firstVariable=val;
};
$scope.myValue = false;

$scope.toggleDescriptionShow=function(){
    if ($scope.myValue !== false) {
        $scope.myValue = false;
    } else {
        $scope.myValue = true;
    }
};

}])