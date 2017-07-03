hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location','$routeParams', 'CommonResourcesFactory','ManagerService',
    function($scope, $http, $location,$routeParams, CommonResourcesFactory, ManagerService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";


        $scope.department={};
        $scope.manager={};
        $scope.job={};

        $scope.departments=[];
        $scope.managers=[];
        $scope.jobs=[];

        //TODO #HR1
        $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });
        $http({url: CommonResourcesFactory.findAllDepartmentsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.departments = data;
            });

        $http({url: CommonResourcesFactory.findAllEmployeesUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.managers = ManagerService.findManager(data);
            });


        // ManagerService.($routeParams.employeeId)
        //     .then(function (res) {
        //         $scope.manager = res.data;
        //     }, function (err) {
        //         console.log("Error at employees/findOne: " + err);
        //     });

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);