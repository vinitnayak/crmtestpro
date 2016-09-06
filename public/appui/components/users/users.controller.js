(function(angular) {
	'use strict';
	 angular.module('myApp').controller('ManageUsersCtrl', ['$scope','$log','$interval','Users',  function ($scope, $log,$interval,Users) {		
		var ctrl = this;
		
		this.$onInit = function() {	
			ctrl.loadUsers();
			
		};
		
		/*Users.getUser().success(function(data, status, headers, config) {
			
		}).error(function(data, status, headers, config) {
			
		})*/
		ctrl.loadUsers = function(){
			$log.debug("Inside Load Users");
			Users.getAllUsers(
					function(response) { // On Success Callback!
						$log.debug("Users : "+response);
					},
					function(response) { // On Error Callback!
						$log.error("Error: " + response);
					}
			);
		};
	}]);
})(window.angular);