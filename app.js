var app = angular.module("Consecration", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/red", {
        templateUrl : "pages/red.html"
    })
    .when("/green", {
        templateUrl : "pages/green.html"
    })
    .when("/blue", {
        templateUrl : "pages/blue.html"
    })
    .otherwise("/", {
        templateUrl : "pages/main.html",
        controller : "mainController",
        title: "Consecration"
    });
});
