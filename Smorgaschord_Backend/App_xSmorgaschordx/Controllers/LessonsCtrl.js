app.controller("LessonsCtrl", ['$q', '$scope', '$rootScope','$http', '$location', '$routeParams', function ($q, $scope, $rootScope, $http, $location, $routeParams) {

    let customLessonId = $routeParams.id;
    console.log(customLessonId);

    $scope.normalListView = true;
    $scope.lessonDeleteView = false;



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

    var specificCustomLesson_Container = {};
    var specificCustomLesson_Texts = {};
    var specificCustomLesson_Songs = {};

    
    $scope.enableDeleteMode = function () {
        $scope.normalListView = false; 
        $scope.lessonDeleteView = true;
    }

    $scope.stopDeleteMode = function () {
        $scope.normalListView = true;
        $scope.lessonDeleteView = false;
    }

    $scope.deleteContainer = function (specificId) {
        console.log(specificId);
        $http.delete('/api/CustomLessonTitle/' + specificId)
            .then(function () {
                displayListOfCustomLessonContainers();
            })
    }


    //SPECIFIC LESSON
    $scope.getLessonContent = function () {
        
        $http.get('/api/CustomLessonSongContent/' + customLessonId)
            .then(function (dbLessonContent) {
                console.log(dbLessonContent);
                $scope.lessonSongExamples = dbLessonContent.data;
            })
                
    }

    $scope.deleteLesson = function (specificCustomLesson_Container) {
        console.log(specificCustomLesson_Container);
    }

}]);