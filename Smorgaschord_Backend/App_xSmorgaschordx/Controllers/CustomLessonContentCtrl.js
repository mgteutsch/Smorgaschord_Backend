app.controller("CustomLessonContentCtrl", ['$q', '$scope', '$rootScope','$http', '$location', function ($q, $scope, $rootScope, $http, $location) {
    console.log("Lesson Content Ctrl is here");

    //One page load, hide the text/song creator areas:
    $scope.hideTextArea = true;
    $scope.openTextCreator = function () {
        $scope.hideTextArea = false;
    }
    $scope.cancelText = function () {
        $scope.hideTextArea = true;
        $scope.lessonTextContent = {};
    }


    $scope.addTextSection = function (lessonText) {
        $http.post('/api/CustomLessonText', lessonText)
            .then(function () {
                $scope.lessonTextContent = {};
                $scope.hideTextArea = true;
            });
    }

}]);