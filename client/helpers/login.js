Session.setDefault('isSignup', false);

// sessionBind(Template.login);
Template.login.helpers({
	isSignup: function() {
		return Session.get('isSignup');
	},
});