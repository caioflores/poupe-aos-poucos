Meteor.startup(function () {
	if (Meteor.users.find().count() > 0) {
		Meteor.loginWithPassword("Judit", "judit123");
	}
});