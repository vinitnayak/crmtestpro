(function(angular) {
	'use strict';
	angular.module('myApp')
		.factory('Users', ['$http', function($http) {
		  return {
			  // get single users
			  getUser: function (id){
				  return $http.get('/api/users/' + id);
			  },
			  // get all users
			  getAllUsers: function(callbackOnSuccessUsers, callbackOnErrorUsers){
				  $http.get('/api/users').then(
					  function successCallback(response) {	        	    	
						  callbackOnSuccessUsers(response);
					  }, 
					  function errorCallback(response) {
						  callbackOnErrorUsers(response);
					  });
			  },
			  // create a user
			  create : function(userData) {
				  return $http.post('/api/users/', userData);
			  },
			  // update a user
			  update : function(id, userData) {
			  		return $http.put('/api/users/' + id, userData);
			  },
			  // delete a user
			  delete : function(id) {
				  return $http.delete('/api/users/' + id);
			  }
		  };
	}]);
})(window.angular);