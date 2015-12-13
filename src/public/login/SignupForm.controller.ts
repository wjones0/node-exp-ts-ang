namespace angLogin {
'use strict';

export class SignupFormController {
	static $inject: Array<string> = ['$http'];
	constructor(private $http: ng.IHttpService) {

	}

	//property: propertyType = propertyValue;
	email : string = "";
	password : string = "";

	signup() {
		this.$http.post('/signup', {
			email : this.email,
			password : this.password
		}).then(function(data) {
			console.log(data);	
		});
	 }

}

angular
	.module('login')
	.controller('SignupFormController', SignupFormController);
}