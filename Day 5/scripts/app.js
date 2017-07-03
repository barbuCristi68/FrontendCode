// TODO load ngRoute module
//var hrApp = angular.module('hrApp', []);
var hrApp = angular.module('hrApp', ['ngRoute']);

hrApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/numbers', {
                redirectTo: '/math'
            })
            .when('/math', {
                templateUrl: 'views/demo/math.html',
                controller: 'MathController'
            })
            .when('/employeeList', {
                templateUrl: 'views/employeeList.html',
                controller: 'EmployeeListController'
            })
            .when('/JobsList', {
                templateUrl: 'views/JobsList.html',
                controller: 'JobListController'
            })
            .when('/employeeView/:employeeId', {
                templateUrl: 'views/employeeView.html',
                controller: 'EmployeeViewController'
            })
            .when('/jobView/:jobId', {
                templateUrl: 'views/jobView.html',
                controller: 'JobViewController'
            })
            .when('/employeeAdd',{
                templateUrl:'views/employeeAdd.html',
                controller:'EmployeeAddController'
            })
            .when('/jobAdd',{
                templateUrl:'views/jobAdd.html',
                controller:'JobAddController'
            })
            .when('/user', {
                templateUrl: 'views/demo/user.html',
                controller: 'UserController'
            })
            .when('/employeeEdit/:employeeId',{
                templateUrl:'views/employeeEdit.html',
                controller: 'EmployeeEditController'
            })
            .otherwise({
                templateUrl: 'views/main.html',
                controller: 'MainController'
            });
    }]).run(['$rootScope',
        function ($rootScope) {
            // TODO
        }
    ]);