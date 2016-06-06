/// <reference path="../typings/tsd.d.ts" />

module Application.Controllers {
  export class MainPageController{
    data:       any;
    friendLink: string;
    constructor($scope: ng.IScope){
      this.friendLink = "test link";
    }

    getRandomPlayer(){
      alert('Random');
    }
  }
}
