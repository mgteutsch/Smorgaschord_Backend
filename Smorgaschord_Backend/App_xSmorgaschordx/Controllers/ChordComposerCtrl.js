app.controller("ChordComposerCtrl", ['$q', '$scope', '$rootScope','$http', '$location', function ($q, $scope, $rootScope, $http, $location) {


/**************************************************************************************************/
//GET, ADD, EDIT, & DELETE Chords:
/**************************************************************************************************/

    $scope.addNewProgression = function (newProgression) {
        $http.post('/api/chordcomposer', newProgression)
            .then(function (res) {
                $scope.newProgression = {};
            })
    };



    

}]);

