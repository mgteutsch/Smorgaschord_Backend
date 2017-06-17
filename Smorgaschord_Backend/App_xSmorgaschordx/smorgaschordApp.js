﻿var app = angular.module("Smorgaschord", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/",
        {
            templateUrl: "App_xSmorgaschordx/Partials/login.html",
            controller: "LoginController"
        })
        .when("/home",
        {
            templateUrl: "App_xSmorgaschordx/Partials/home.html",
            controller: "HomeController"
        })
        .when("/signup",
        {
            templateUrl: "App_xSmorgaschordx/Partials/signup.html",
            controller: "SignupController"
        })
        .when("/login",
        {
            templateUrl: "App_xSmorgaschordx/Partials/login.html",
            controller: "LoginController"
        })
        .when("/chordcomposer",
        {
            templateUrl: "App_xSmorgaschordx/Partials/chordcomposer.html",
            controller: "ChordComposerCtrl"
        })
        .when("/customlessoncreator",
        {
            templateUrl: "App_xSmorgaschordx/Partials/customlessoncreate.html",
            controller: "CustomLessonContentCtrl"
        })
        .otherwise("/login");
}])


app.run(["$http", function ($http) {

    var token = sessionStorage.getItem('token');

    if (token)
        $http.defaults.headers.common['Authorization'] = `bearer ${token}`;

    }
]);