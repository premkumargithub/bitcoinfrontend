//Creating aplication namespace
var app = angular.module('BitCoin', ['ngRoute']);

app.controller('AppController', ['$rootScope', '$scope', '$location', 
	function($rootScope, $scope, $location) {
		
		$scope.name ="Bigcoin";
}]);
