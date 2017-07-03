hrApp.controller('MenuController', ['$scope', 'EmployeeActionsService','JobService', function ($scope, EmployeeActionsService, JobService) {

    // $scope.employeeActionList = [{
    //     url:'#/employeeslist',
    //     label:'Employee List'
    // }];


    $scope.employeeActionList = EmployeeActionsService;
    $scope.jobActionList = JobService;
    $scope.currentDate = new Date();
}]);
