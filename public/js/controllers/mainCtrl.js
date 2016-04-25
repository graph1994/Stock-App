module.exports = function($scope,$http,$resource,$routeParams,stock){
	var self = this;
	//On load query for a list of stocks!
	$scope.stockList = stock.query();
	$scope.stockName = '';
	$scope.year = $routeParams.year || 1;


	//On stock selected it will query data from Yahoo Finace, and Google Finace Chart.
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
	//Watch to see if year changes if it does it creates a new google Finace chart of the different year.
		$scope.$watch('year',function(){
			if($scope.stock != null){
				$routeParams.year = $scope.year;
				$scope.graph = 'https://www.google.com/finance/getchart?q=' + $scope.stock.Symbol.toUpperCase() + '&p=' + $scope.year+'Y&i=86400'
			}
		})
		//Changes route back to the root.
	$scope.changeRoutetoMain = function(){
		$location.path('/')
	}
	//Check to see if its a good stock!
	$scope.postiveStock = function(value){
		if(value > 0)
			return true;
		else
			return false;
	};
	//function to tell if stock is empty ot not.
	$scope.vaildEntree = function(stockName){
			if(stockName != '')
				return true;
			else
				return false;

	}


};
