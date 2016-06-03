/// <reference path="../node_modules/definitely-typed-angular/angular.d.ts" />

angular.module('battle-ship-app', []);

angular.module('battle-ship-app').controller('MainPageController', ['$scope', ($scope) => new Application.Controllers.MainPageController($scope)])
