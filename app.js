var stockApp = angular.module('stockApp',['ngResource','ngRoute','ui.bootstrap']);
stockApp.config(function($routeProvider){
	$routeProvider

	.when('/',{
		templateUrl:'pages/graph.html',
		controller:'mainController'
		//controllerAs:'main'
	})
	.when('/:year',{
		templateUrl:'pages/graph.html',
		controller:'mainController'
		//controllerAs:'main'
	})
});
stockApp.controller('mainController',['$scope','$http','$resource','$routeParams','stockService',function($scope,$http,$resource,$routeParams,stockService){
	var self = this;
	//$scope.stockAPI = $resource("http://feeds.financialcontent.com/account_name/JSQuote",
		//callback:"JSON_CALLBACK"},{get:{method:"JSON"}});
	//$scope.stockResult = $scope.stockAPI.get({Ticker:'CSCO'});
	$scope.year = $routeParams.year || '1';
	
	$scope.$watch('stock',function(){
		stockService.stock = $scope.stock;
	})
	$scope.$watch('year',function(){
		if($scope.stock)
		$routeParams.year = $scope.year;
		$scope.graph = 'https://www.google.com/finance/getchart?q=' + $scope.stock.Symbol.toUpperCase() + '&p=' + $scope.year+'Y&i=86400'

	})
	$scope.submit = function(){
		$http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22' + $scope.stockName+ '%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=')
    	.success(function(data) {
            //alert ("toto");
            $scope.stock = data.query.results.quote;
            $scope.amount = data.query.count;
            $scope.graph = 'https://www.google.com/finance/getchart?q=' + $scope.stock.Symbol.toUpperCase() + '&p=' + $scope.year+'Y&i=86400'
            
    	})
    	.error(function(data) {
            alert ("data="+data);
       		 $scope.infos = data;
    	});
		
		console.log('testing');
	};
	$scope.changeRoutetoMain = function(){
		$location.path('/')
	}
	$scope.postiveStock = function(value){
		if(value > 0)
			return true;
		else
			return false;
	};
	$scope.vaildEntree = function(stockName){
			if(stockName != '')
				return true;
			else
				return false;

	}
	$scope.stockName = '';
  	$scope.stockList = undefined;
  	if($scope.stockList === undefined){     
        

        

        //getDataService.getData(function(data) {
        	$http.get('symbols.json')
            .success(function(data) { 
                $scope.stockList = data;
                
            })
            .error(function(error) {
                alert('An error occured');
            });
            


        //});
    }  
   /*.filter('suggestionFilter', function(){
	  return function(items){
	    for (var item in items) {
	      if (items[item].Symbol !== $scope.stockName) delete items[item];
	    }
	    return items;
	  }
})*/
}]);
stockApp.service('stockService',function(){
	this.stock = '';
	this.graph = '';

});
