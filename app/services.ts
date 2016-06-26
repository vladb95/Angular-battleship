/// <reference path="../typings/tsd.d.ts" />

module Application.Services{

  export class BattleshipService {

    constructor(socketFactory, private _q, private _http){
    }

    getPersonalLinkToPlayWithFriend(): ng.IPromise<any>
    {
      let defer = this._q.defer();
      return defer.promise;
    }

    playWithRandomPlayer(): ng.IPromise<any>
    {
      let defer = this._q.defer();
      return defer.promise;
    }
  }
}
