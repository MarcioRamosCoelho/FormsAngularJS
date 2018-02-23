

var angularFormsApp = angular.module("angularFormsApp", ["ngRoute", "ui.bootstrap"]);

angularFormsApp.config(function ($routeProvider) {  
    $routeProvider
    .when("/Home", {
        templateUrl: "app/Home.html",
        controller: "HomeController"
    })
    .when("/newEmployeeForm", {
        templateUrl: "app/EmployeeForm/efTemplate.html",
        controller: "efController"
    })
    .when("/updateEmployeeForm/:id", {
        templateUrl: "app/EmployeeForm/efTemplate.html",
        controller: "efController"
    })
    .when("/paris", {
        templateUrl : "app/paris.htm",
        controller : "parisCtrl"
    })
     .otherwise({
         redirectTo: "/Home"
    });
});





