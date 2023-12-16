angular.module('coala')
    .directive('mentors', ['$http', function ($http) {
        return {
            restrict: 'E',
            templateUrl: baseUrl+'/partials/tabs/mentors.html',
            controller: function ($scope, $rootScope) {
                self = this
                self.mentorsList = {}
                self.adminsList = {}

                $http.get('data/projects.liquid')
                    .then(function (res) {
                        $scope.projects = res.data.filter(project => project.initiatives.includes("GSoC"))
                        angular.forEach($scope.projects, function (value, key) {
                            angular.forEach(value.mentors, function (value, key) {
                                self.mentorsList[value.name] = {
                                    "name": value.name,
                                    "github_handle": value.github_handle,
                                    "github_avatar_url": "https://avatars.githubusercontent.com/" + value.github_handle,
                                    "email": value.email,
                                    "other_chat_options":value.other_chat_options
                                }
                            });
                        });
                    })

                $http.get('data/admins.json')
                    .then(function (res) {
                        admins = res.data
                        angular.forEach(admins, function (value, key) {
                            self.adminsList[value] = {
                                "github_handle": value,
                                "github_avatar_url": "https://avatars.githubusercontent.com/" + value

                            }
                        });
                    })

            },
            controllerAs: "gic"
        }
    }]);
