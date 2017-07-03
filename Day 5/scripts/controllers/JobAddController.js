hrApp.controller('JobAddController', ['$scope', '$http', '$location','$routeParams', 'CommonResourcesFactory',
    function($scope, $http, $location,$routeParams, CommonResourcesFactory) {

        $scope.job = {};
        $scope.jobs = [];
        $scope.create = function (addJob) {
            $http({url: CommonResourcesFactory.addJobUrl, method: 'POST', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);

                });
        };


}]);
