app.service('UserService', function() {
	this.getLogin = function(opts, callback) {
		var user = {};
		user.username = 'abc';
		user.email = 'abc.abc@gmail.com';
		callback(user);
		//Need to server api
	};
});