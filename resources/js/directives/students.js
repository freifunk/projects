angular.module('coala')
    .directive('students', ['$http', function ($http) {
        return {
            restrict: 'E',
            templateUrl: baseUrl+'/partials/tabs/students.html',
            controller: function ($scope, $rootScope) { },
            controllerAs: "gsoc"
        }
    }]);
