/// <reference path="../typings/tsd.d.ts" />

module Application.Controllers {

  export class MainPageController {

    friendLink: string;

    constructor($scope: ng.IScope){
      this.friendLink = "test link";
    }

    getRandomPlayer(){

    }
  }

  export class ConstructorController {

    constructor() {

    }
  }
}
