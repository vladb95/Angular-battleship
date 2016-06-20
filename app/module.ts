/// <reference path="../typings/tsd.d.ts" />

angular.module('battle-ship-app', ['ngRoute']);

angular.module('battle-ship-app').config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => new Application.Config.RouteConfig($stateProvider, $urlRouterProvider)]);

angular.module('battle-ship-app').controller('MainPageController', ['$scope', ($scope) => new Application.Controllers.MainPageController($scope)]);
