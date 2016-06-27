/// <reference path="../typings/tsd.d.ts" />

module Application.Controllers {

  export class MainPageController {

    friendLink: string;

    constructor(private _bsService, private _location){
      this._bsService.getPersonalLinkToPlayWithFriend().then((data) => {
        this.friendLink = data;
      });
    }

    getRandomPlayer(){
      this._location.path('/constructor');
    }
  }

  export class ConstructorController {

    constructor() {

    }

    dropShip($data,$event){
      console.log($data);
      console.log($event);
      alert('success');
    }
  }
}
