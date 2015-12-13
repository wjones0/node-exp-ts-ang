namespace angLogin {
'use strict';

export class LoginFormController {
	static $inject: Array<string> = ['$http'];
	constructor(private $http: ng.IHttpService) {

	}

	//property: propertyType = propertyValue;
	email : string = "";
	password : string = "";

	login() {
		this.$http.post('/login', {
			email : this.email,
			password : this.password
		}).then(function(data) {
			console.log(data);	
		});
	 }
	 
	 connect() {
		this.$http.post('/connect/local', {
			email : this.email,
			password : this.password
		}).then(function(data) {
			console.log(data);	
		});
	 }
}

angular
	.module('login')
	.controller('LoginFormController', LoginFormController);
}