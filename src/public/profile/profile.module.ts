namespace profile {
	'use strict';

	angular.module('profile', [])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider    
                .when('/profile', {
                    templateUrl: '/views/profile.html',
                    controller: 'ProfileController',
                    controllerAs: 'profile'
                }) 
                .when('/connect/local', {
                    templateUrl: '/views/connect-local.html',
                    controller: 'SecondarySignupController',
                    controllerAs: 'profile'
                });

            $locationProvider.html5Mode(true);
        }]);
		
}