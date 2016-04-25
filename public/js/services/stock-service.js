//Handles the Restful calls on Angularjs Side
module.exports = function($resource) {
  return $resource("/stock/:id",{id:'@id'},{
    'get': {
      method: 'GET'
    }

  });
};
