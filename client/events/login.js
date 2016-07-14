Template.login.rendered = function() {
	Session.set('error', null);
};

Template.login.events({
	'submit form[name=login]': function(e, template) {
	    e.preventDefault();

	    var username = $('input[name=username]').val();
	    var password = $('input[name=password]').val();
	    
	    Meteor.loginWithPassword({username: username}, password, onLoginSignupAttempt);
	},

	'submit form[name=signup]': function(e, template){
	    e.preventDefault();

	    var name = $('input[name=name]').val();
	    var username = $('input[name=username]').val();
	    var password = $('input[name=password]').val();

	    Accounts.createUser({
	        username: username,
	        password: password,

	        profile: {
	        	name: name
	        }
	    }, onLoginSignupAttempt);
	},
});

function onLoginSignupAttempt(error) {
	if(error) {
		console.dir(error);
		Session.set('error', error.reason);
	} else {
		Session.set('error', null);
		
		if(Router.current().url == Router.path('login') || Router.current().url == Router.path('signup')) {
			Router.go('/');
		}
	}
}