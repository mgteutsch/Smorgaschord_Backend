app.controller("LessonsCtrl", function ($q, $scope) {

    //On page load, remove any styling done by Improviser
    angular.element(document.querySelectorAll('#overallBackground')).removeClass();
    angular.element(document.querySelectorAll('#navbar')).removeClass();
    angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper pink accent-3");


    //For More Details Collapsible:
    $(document).ready(function () {
        $('.collapsible').collapsible();
    });


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

});