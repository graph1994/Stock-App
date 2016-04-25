require('angular')
var stockService = require('./services/stock-service.js')
var mainCtrl = require('./controllers/mainCtrl')
var stockApp = angular.module('stockApp',['ngResource','ngRoute','ui.bootstrap']);
stockApp.config(function($routeProvider){
	$routeProvider
	//Opens graph.html in view.
	.when('/',{
		templateUrl:'pages/graph.html',
		controller:'mainCtrl'
		//controllerAs:'main'
	})
	//If a number is place in root it will update the view of the graph
	.when('/:year',{
		templateUrl:'pages/graph.html',
		controller:'mainCtrl'
		//controllerAs:'main'
	})
});
stockApp.factory("stock", ["$resource",stockService])
stockApp.controller('mainCtrl',['$scope','$http','$resource','$routeParams','stock',mainCtrl])
