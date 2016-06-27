/// <reference path="../typings/tsd.d.ts" />

module Application.Config{
  export class RouteConfig{
    constructor($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: "templates/main.html",
          controller: "MainPageController",
          controllerAs: "vm"
        })
        .when('/constructor', {
          templateUrl: "templates/constructor.html",
          controller: "ConstructorController",
          controllerAs: "vm"
        })
        .otherwise('/');
    }
  }
}
