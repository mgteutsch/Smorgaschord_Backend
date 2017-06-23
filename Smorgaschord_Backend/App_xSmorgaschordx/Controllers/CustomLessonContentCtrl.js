app.controller("CustomLessonContentCtrl", ['$q', '$scope', '$rootScope', '$http', '$location', '$window', '$sce', function ($q, $scope, $rootScope, $http, $location, $window, $sce) {

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
    var userChoseniTunesSong = {};
    $scope.hideiTunesResults = true;

    //iTunes ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    $scope.iTunesSearch = function () {

        $scope.hideiTunesResults = false;

        var searchTerm = $scope.searchTerm;

        $scope.searching = true;
        console.log("Search term is: ", searchTerm);

        $http.jsonp($sce.trustAsResourceUrl('https://itunes.apple.com/search'), { params: { term: searchTerm, entity: "musicTrack", limit: 5 } })
            .then(function (iTunesResponse) {
                $scope.searching = false;
                $scope.searchTerm = "";

                for (i = 0; i < iTunesResponse.data.resultCount; i++) {
                    //console.log(iTunesResponse.data.results[i]);
                    console.log(iTunesResponse.data.results[i].trackName);
                }

                $scope.songResults = iTunesResponse.data.results;

            }).then(function () { console.log("done") });
    }

    $scope.selectSong = function (chosenSong) {
        userChoseniTunesSong = chosenSong;
        $scope.hideiTunesResults = true;
        $scope.songResults = {};

        $scope.selectedSong = chosenSong;
    }
    //end iTunes~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //Post Song:
    $scope.addSong = function (songExample) {

        //From creating the Title (aka LessonContainer):
        songExample.CustomLessonContainerId = customLessonId;
        //This is much more efficient than the addTextSection function

        //From the iTunes selection:
        songExample.SongTitle = userChoseniTunesSong.trackName;
        songExample.SongArtist = userChoseniTunesSong.artistName;
        songExample.SongClip = userChoseniTunesSong.previewUrl;

        $http.post('/api/CustomLessonSongContent', songExample)
            .then(function () {
                $scope.lessonSongContent = {};
                $scope.searchBar = "";
                $scope.hideSongArea = true;
            });
    }

    
  


  


}]);