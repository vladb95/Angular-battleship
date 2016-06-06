/// <reference path="../typings/tsd.d.ts" />

module Application.Config{
  export class RouteConfig{
    constructor($stateProvider: ng.ui.IStateProvider){
      $stateProvider
        .state('index', {
          url: "",
          templateUrl: "templates/main.html",
          controller: "MainPageController",
          controllerAs: "vm"
        })
    }
  }
}
