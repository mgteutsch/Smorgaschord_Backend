app.controller("CustomLessonContentCtrl", ['$q', '$scope', '$rootScope','$http', '$location', function ($q, $scope, $rootScope, $http, $location) {

    var customLessonId = 0;
    var titleUserIsWorkingOn = "";

    //Show only the Title Creator to start, which will then initiate the Lesson Container
    //When the title is created, it creates the overall LessonId, which will be used for the Text and Songs
    $scope.hideTitleCreator = false;
    $scope.hideSongAndTextCreators = true;

    //User first creates the Lesson Title (CustomLessonContainer Model):
    $scope.saveLessonTitle = function (userTitleObject) {
        titleUserIsWorkingOn = userTitleObject.CustomLessonTitle;
        $http.post('/api/CustomLessonTitle', userTitleObject)
                .then(function (responseTitleObject) {
                    customLessonId = responseTitleObject.data.Id;
                    titleUserIsWorkingOn = responseTitleObject.data.CustomLessonTitle;
                    $scope.lessonTitleEditor = titleUserIsWorkingOn;

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

        //lessonText has all the Model properties except CustomLessonContainerId
        //So, need to create a final object to push to the Db that has CustomLessonContainerId:
 
        var lessonTextObject = {
            CustomLessonContainerId: customLessonId,
            TextSection: lessonText.TextSection,
            ContentPlacementOrder: lessonText.ContentPlacementOrder
        };
        //However, this is a little redundant.
        //Look at how the ContainerId was handled in the addSong function...

        $http.post('/api/CustomLessonText', lessonTextObject)
            .then(function () {
                $scope.lessonTextContent = {};
                $scope.hideTextArea = true;
            });
    }


    // SONG Items -------------------------------------------------------------
    $scope.addSong = function (songExample) {

        songExample.CustomLessonContainerId = customLessonId;
        //This is much more efficient than the addTextSection function

        $http.post('/api/CustomLessonSong', songExample)
            .then(function () {
                $scope.lessonSongContent = {};
                $scope.searchBar = "";
                $scope.hideSongArea = true;
            });
    }
}]);