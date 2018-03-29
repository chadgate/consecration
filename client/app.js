var app = angular.module("Consecration", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/red", {
        templateUrl : "pages/red.html",
        controller: "redController",
        title: "Red"
    })
    .when("/green", {
        templateUrl : "pages/green.html",
        controller: "greenController",
        title: "Green"
    })
    .when("/blue", {
        templateUrl : "pages/blue.html",
        controller: "blueController",
        title: "Blue"
    })
    .otherwise({
        templateUrl : "pages/main.html",
        controller : "mainController",
        title: "Consecration"
    });
});
