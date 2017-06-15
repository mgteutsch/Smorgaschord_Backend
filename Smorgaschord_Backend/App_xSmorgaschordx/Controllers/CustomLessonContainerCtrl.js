app.controller("CustomLessonContainerCtrl", ['$q', '$scope', '$rootScope', '$http', '$location', function ($q, $scope, $rootScope, $http, $location) {

    console.log("CustomLessonCtrl is here");

    $scope.showTextEditor = function () {
        console.log("Text editor!");
    }

    $scope.showSongEditor = function () {
        console.log("Song editor!");
    }

}]);