app.controller("ChordComposerCtrl", ['$q', '$scope', '$rootScope','$http', '$location', function ($q, $scope, $rootScope, $http, $location) {


/**************************************************************************************************/
//GET, ADD, EDIT, & DELETE Chords:
/**************************************************************************************************/
    let retrieveSavedProgressions = function () {
        $http.get('/api/chordcomposer')
            .then(function (dbChords) {
                $scope.chordProgressions = dbChords.data;
            });
    }
    retrieveSavedProgressions();

    $scope.addNewProgression = function (newProgression) {
        $http.post('/api/chordcomposer', newProgression)
            .then(function () {
                $scope.newProgression = {};
                retrieveSavedProgressions();
            });
    }

    $scope.editProgression = function (progressionToEdit) {
        console.log(progressionToEdit);
        $http.put('/api/chordcomposer/editChords', progressionToEdit)
            .then(function () {
                retrieveSavedProgressions();
            });
    }

    $scope.deleteProgression = function (progressionToDeleteId) {
        $http.delete(`/api/chordcomposer/${progressionToDeleteId}`)
            .then(function () {
                retrieveSavedProgressions();
            });
    }





    

}]);

