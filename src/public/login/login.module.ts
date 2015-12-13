namespace angLogin {
	'use strict';

	angular.module('login', [
	
	])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider    
                .when('/signup', {
                    templateUrl: '/views/signup.html',
                    controller: 'SignupController',
                    controllerAs: 'signup',
                    caseInsensitiveMatch: true
                })
                .when('/login', {
                    templateUrl: '/views/login.html',
                    controller: 'LoginController',
                    controllerAs: 'login',
                    caseInsensitiveMatch: true
                })
                .otherwise({
                    templateUrl: '/views/landing.html',
                    controller: 'IndexController',
                    controllerAs: 'index'
                });

            $locationProvider.html5Mode(true); //Use html5Mode so your angular routes don't have #/route
        }]);
}