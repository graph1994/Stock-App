//Handles the Restful calls on Angularjs Side
stockApp.factory("stock", ["$resource", function($resource) {
  return $resource("/stock/:id",{id:'@id'},{
    'get': {
      method: 'GET'
    }

  });
}]);
