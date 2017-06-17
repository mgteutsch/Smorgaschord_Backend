app.controller("CustomLessonContentCtrl", ['$q', '$scope', '$rootScope','$http', '$location', function ($q, $scope, $rootScope, $http, $location) {

    var customLessonId = 0;

    //Show only the Title Creator to start, which will then initiate the Lesson Container
    //When the title is created, it creates the overall LessonId, which will be used for the Text and Songs
    $scope.hideTitleCreator = false;
    $scope.hideSongAndTextCreators = true;

    //User first creates the Lesson Title (CustomLessonContainer Model):
    $scope.saveLessonTitle = function (userTitle) {
        $http.post('/api/CustomLessonTitle', userTitle)
            //.then($http.get()) get whatever the highest Id is
            .then(function () {
                $scope.customLessonInitialize = {};
                $scope.hideTitleCreator = true;
                $scope.hideSongAndTextCreators = false;
            });
    }





    //One page load, hide the text/song creator areas:
    //Text hide:
    $scope.hideTextArea = true; //initial state
    $scope.openTextCreator = function () {
        $scope.hideTextArea = false;
    }
    $scope.cancelText = function () {
        $scope.hideTextArea = true;
        $scope.lessonTextContent = {};
    }

    //Song hide:
    $scope.hideSongArea = true; //initial state
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