app.controller("CustomLessonPageCtrl", ['$q', '$scope', '$rootScope', '$http', '$location', '$window', '$sce', '$routeParams', function ($q, $scope, $rootScope, $http, $location, $window, $sce, $routeParams,) {

    //This controller handles each lesson's individul page:
    let customLessonId = $routeParams.id;
    console.log(customLessonId);


    let getLessonTitle = function () {
        $http.get('/api/CustomLessonTitle/' + customLessonId)
            .then(function (dbLessonContainer) {
                console.log(dbLessonContainer);
                $scope.lessonTitle = dbLessonContainer.data;
            });
    }
    getLessonTitle();


    let getLessonContent = function () {
        $http.get('/api/CustomLessonSongContent/' + customLessonId)
            .then(function (dbLessonContent) {
                console.log(dbLessonContent);
                $scope.lessonSongExamples = dbLessonContent.data;
            });
    }
    getLessonContent();

    
    $scope.testAudioClick = function () {
        console.log("YEP!");
    }

}]);