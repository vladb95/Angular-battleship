/// <reference path="../typings/tsd.d.ts" />

angular.module('battle-ship-app', ['ngRoute', 'btford.socket-io', 'ngDraggable']);

angular.module('battle-ship-app').constant('SERVER_URL', 'http://127.0.0.1/');

angular.module('battle-ship-app').config(['$routeProvider', ($routeProvider) => new Application.Config.RouteConfig($routeProvider)]);

angular.module('battle-ship-app').factory('BattleshipService', ['socketFactory', '$q', '$http', 'SERVER_URL', (socketFactory, $q, $http, SERVER_URL) => new Application.Services.BattleshipService(socketFactory, $q, $http, SERVER_URL)]);

angular.module('battle-ship-app').controller('MainPageController', ['BattleshipService', '$location', (BattleshipService, $location) => new Application.Controllers.MainPageController(BattleshipService, $location)]);

angular.module('battle-ship-app').controller('ConstructorController', () => new Application.Controllers.ConstructorController());
