namespace profile {
'use strict';

export class ProfileController {
	
	user : any;
	
	static $inject: Array<string> = ['$http'];
	constructor(private $http: ng.IHttpService) {
		this.$http.get('/api/userData')
                .success((data) => {
                    this.user = data; //Expose the user data to your angular scope
                });
	}
	
}

angular
	.module('profile')
	.controller('ProfileController', ProfileController);
}