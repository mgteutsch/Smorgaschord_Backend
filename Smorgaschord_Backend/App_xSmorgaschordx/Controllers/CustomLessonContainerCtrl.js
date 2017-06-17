app.controller("CustomLessonContainerCtrl", ['$q', '$scope', '$rootScope', '$http', '$location', function ($q, $scope, $rootScope, $http, $location) {

    $scope.saveLessonTitle = function (userTitle) {
        $http.post('/api/CustomLessonTitle', userTitle)
            .then(function () {
                $scope.customLessonInitialize = {};
                $location.url("/customlessoncreator/placeholder");
            });
        }
}]);