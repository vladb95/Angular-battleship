/// <reference path="../typings/tsd.d.ts" />

module Application.Config{
  export class RouteConfig{
    constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider){

      $stateProvider
        .state('index', {
          url: "/",
          templateUrl: "templates/main.html",
          controller: "MainPageController",
          controllerAs: "vm"
        })
        .state('index.constructor', {
          url: '/constructor',
          templateUrl: "templates/constructor.html",
        });
        $urlRouterProvider
          .otherwise('/');
    }
  }
}
