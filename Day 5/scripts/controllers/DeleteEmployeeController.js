hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location','$routeParams', 'CommonResourcesFactory',
    function($scope, $http, $location,$routeParams, CommonResourcesFactory) {

        $scope.delete = function (deleteEmployee) {
            $http({url: CommonResourcesFactory.deleteEmployeeUrl, method: 'DELETE', data: deleteEmployee})
                .success(function (data) {
                  $scope.employee = data;
                    $location.url('/employeeList/');
                });
        }
    }]);