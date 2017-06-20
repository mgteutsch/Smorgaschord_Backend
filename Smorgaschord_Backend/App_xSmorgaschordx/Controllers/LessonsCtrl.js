app.controller("LessonsCtrl", ['$q', '$scope', '$rootScope','$http', '$location', function ($q, $scope, $rootScope, $http, $location) {

    //On page load, remove any styling done by Improviser
    angular.element(document.querySelectorAll('#overallBackground')).removeClass();
    angular.element(document.querySelectorAll('#navbar')).removeClass();
    angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper pink accent-3");

/* Collapsible isn't working with Visual Studio... handle later    
    //For More Details Collapsible:
    $(document).ready(function () {
        $('.collapsible').collapsible();
    });
*/


    //Auto scroll to top
    $scope.scrollToTop = function () {
        window.scrollTo(0, 0);
    };


    //inner Navbar items:
    $scope.regularLessonsClick = function () {
        $scope.showHideLessons = false;
        angular.element(document.querySelector('#customLessonsTab')).removeClass();
        angular.element(document.querySelector('#regularLessonsTab')).removeClass();
        angular.element(document.querySelector('#regularLessonsTab')).addClass("active");
        angular.element(document.querySelector('#regularLessonsTab')).addClass("selected");
    };

    $scope.customLessonsClick = function () {
        $scope.showHideLessons = true;
        angular.element(document.querySelector('#customLessonsTab')).removeClass();
        angular.element(document.querySelector('#regularLessonsTab')).removeClass();
        angular.element(document.querySelector('#customLessonsTab')).addClass("active");
        angular.element(document.querySelector('#customLessonsTab')).addClass("selected");
    };

    //GET list of Custom Lessons
    let displayListOfCustomLessonContainers = function () {
        $http.get('/api/CustomLessonTitle')
            .then(function (dbLessonContainers) {
                $scope.lessonListItems = dbLessonContainers.data;
            });
    }
    displayListOfCustomLessonContainers();


    var specificCustomLessonData = {};

    $scope.goToSpecificLesson = function (specificLesson) {
        console.log(specificLesson.CustomLessonTitle, specificLesson.Id);

        specificCustomLessonData = specificLesson;
    }

}]);