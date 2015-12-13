namespace angAuth {
	'use strict';

	angular.module('app', [
		'ngRoute', 
		'login', 
		'profile', 
		'httpFactory', 
		'common-directives', 
		 'angular-growl'
	]);
}