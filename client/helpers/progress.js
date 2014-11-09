Template.progress.helpers({
	
	progressNow: function() {

		var transactions = Transactions.find().fetch();

		var userGoal = Meteor.user().profile.goal;

		var total = 0;

		for (var i=0; i < transactions.length; i++)
			total += transactions[i].save;

		var teste = (total*100)/userGoal;

		return teste;
	},

	totalSaved: function() {
		var total = 0;

		var transactions = Transactions.find().fetch();

		for (var i=0; i < transactions.length; i++)
			total += transactions[i].save; 
		
		return total;
	},



});