hrApp.controller('JobViewController', ['$scope', '$http', '$routeParams', '$location', 'JobService1',
    function ($scope, $http, $routeParams, $location, JobService1) {
        JobService1.findById($routeParams.jobId)
            .then(function (res) {
                $scope.job = res.data;
            }, function (err) {
                console.log("Error at jobs/findOne: " + err);
            });

        $scope.back = function () {
            $location.url('/JobsList');
        }
    }]);