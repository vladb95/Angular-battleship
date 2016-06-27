/// <reference path="../typings/tsd.d.ts" />

module Application.Services{

  export class BattleshipService {

    constructor(socketFactory, private _q, private _http, private _serverUrl){
    }

    getPersonalLinkToPlayWithFriend(): ng.IPromise<any>
    {
      let defer = this._q.defer();
      defer.resolve(this._serverUrl);
      return defer.promise;
    }

    playWithRandomPlayer(): ng.IPromise<any>
    {
      let defer = this._q.defer();
      return defer.promise;
    }
  }
}
