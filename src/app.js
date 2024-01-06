const app = angular.module("postgreDbApp", ["ngRoute", "ui.bootstrap"]);

app.config(function($routeProvider, $locationProvider) {
   $routeProvider.when ("/", {
       templateUrl: "/views/view.tpl.html",
       controller: "postgreDbAppController",
       reloadOnSearch: false
   })
   .otherwise({
       redirectTo: '/'
   })

   $locationProvider.html5Mode({
       enabled: true,
       requireBase: false
   });
});