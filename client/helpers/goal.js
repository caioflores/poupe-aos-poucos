Template.goal.rendered = function() {
	Session.set('goal', this.find('#goal').value);
}

Template.goal.helpers({
	goal: function() {
		return Session.get('goal');
	},

	goalPrice: function() {
		return Session.get('goalPrice');
	},

	canFinish: function() {
		return Session.get('goal') && Session.get('goalPrice');
	},
});