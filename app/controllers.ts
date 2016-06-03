/// <reference path="../node_modules/definitely-typed-angular/angular.d.ts" />

module Application.Controllers {
  export class MainPageController{

    constructor($scope: ng.IScope){
      console.log("test");
    }

    testFunction(){
      console.log("test 2");
    }
  }
}
