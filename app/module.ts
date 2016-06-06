/// <reference path="../typings/tsd.d.ts" />

angular.module('battle-ship-app', ['ui.router']);

angular.module('battle-ship-app').controller('MainPageController', ['$scope', ($scope) => new Application.Controllers.MainPageController($scope)]);

angular.module('battle-ship-app').config(['$stateProvider', ($stateProvider) => new Application.Config.RouteConfig($stateProvider)]);
