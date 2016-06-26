/// <reference path="../typings/tsd.d.ts" />

angular.module('battle-ship-app', ['ngRoute', 'btford.socket-io']);

angular.module('battle-ship-app').config(['$routeProvider', ($routeProvider) => new Application.Config.RouteConfig($routeProvider)]);

angular.module('battle-ship-app').factory('BattleshipService', ['socketFactory', '$q', '$http', (socketFactory, $q, $http) => new Application.Services.BattleshipService(socketFactory, $q, $http)]);

angular.module('battle-ship-app').controller('MainPageController', ['$scope', ($scope) => new Application.Controllers.MainPageController($scope)]);
