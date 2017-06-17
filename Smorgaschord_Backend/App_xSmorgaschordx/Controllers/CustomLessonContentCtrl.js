app.controller("CustomLessonContentCtrl", ['$q', '$scope', '$rootScope','$http', '$location', function ($q, $scope, $rootScope, $http, $location) {
    console.log("Lesson Content Ctrl is here");

    //One page load, hide the text/song creator areas:
    //Text hide:
    $scope.hideTextArea = true; //initial
    $scope.openTextCreator = function () {
        $scope.hideTextArea = false;
    }
    $scope.cancelText = function () {
        $scope.hideTextArea = true;
        $scope.lessonTextContent = {};
    }

    //Song hide:
    $scope.hideSongArea = true; //initial
    $scope.openSongCreator = function () {
        $scope.hideSongArea = false;
    }
    $scope.cancelSongExample = function () {
        $scope.hideSongArea = true;
        $scope.searchBar = "";
        $scope.lessonSongContent = {};
    }


    // TEXT Items -------------------------------------------------------------
    $scope.addTextSection = function (lessonText) {
        $http.post('/api/CustomLessonText', lessonText)
            .then(function () {
                $scope.lessonTextContent = {};
                $scope.hideTextArea = true;
            });
    }


    // SONG Items -------------------------------------------------------------
    $scope.addSong = function (songExample) {
        $http.post('/api/CustomLessonSong', songExample)
            .then(function () {
                $scope.lessonSongContent = {};
                $scope.searchBar = "";
                $scope.hideSongArea = true;
            });
    }
}]);