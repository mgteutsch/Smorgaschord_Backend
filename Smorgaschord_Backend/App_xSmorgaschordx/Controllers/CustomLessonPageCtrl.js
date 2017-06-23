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




    //Placeholder chord animations:
    
    let chord4PinkTexter = function(){
        var nextChord;
        let startNextChord = function(){
            nextChord = setTimeout(function(){chord1PinkTexter();},1900);
            angular.element(document.querySelector('.customChord3')).removeClass("pink-text");
            angular.element(document.querySelector('.customChord4')).addClass("pink-text");
        };
        startNextChord();	
    }

    let chord3PinkTexter = function(){
        var nextChord;
        let startNextChord = function(){
            nextChord = setTimeout(function(){chord4PinkTexter();},1900);
            angular.element(document.querySelector('.customChord2')).removeClass("pink-text");
            angular.element(document.querySelector('.customChord3')).addClass("pink-text");
        };
        startNextChord();	
    }

    let chord2PinkTexter = function(){
        var nextChord;
        let startNextChord = function(){
            nextChord = setTimeout(function(){chord3PinkTexter();},1900);
            angular.element(document.querySelector('.customChord1')).removeClass("pink-text");
            angular.element(document.querySelector('.customChord2')).addClass("pink-text");
        };
        startNextChord();	
    }
        

    let chord1PinkTexter = function(){
        var nextChord;
        let startNextChord = function(){
            nextChord = setTimeout(function(){chord2PinkTexter();},1900);
            angular.element(document.querySelector('.customChord4')).removeClass("pink-text");
            angular.element(document.querySelector('.customChord1')).addClass("pink-text");
        };
        startNextChord();	
    }
    
    chord1PinkTexter();


}]);