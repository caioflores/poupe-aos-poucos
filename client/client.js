Meteor.startup(function () {
	moment.locale('pt-BR');

	Deps.autorun(function() {
		if (Meteor.users.find().count() > 0) {
			Meteor.loginWithPassword("Judit", "judit123");
		}
	});
});