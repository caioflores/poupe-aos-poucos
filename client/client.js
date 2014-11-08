Meteor.startup(function () {
	if (Meteor.users.find().count() == 1) {
		Meteor.loginWithPassword("Judit", "judit123");
	}
});