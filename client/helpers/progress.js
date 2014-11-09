Template.progress.helpers({
	progressNow: function() {
		var userGoal = Meteor.user().profile.goal.price;
		var goalSinceDate = Meteor.user().profile.goal.since;
		var transactionsAfterGoal = Transactions.find({date: {$gte: goalSinceDate}}).fetch();
		var total = 0;

		for (var i=0; i < transactionsAfterGoal.length; i++)
			total += transactionsAfterGoal[i].save;

		var progress = (total*100)/userGoal;

		if (progress >= 100) {
			swal({
				title: "Parabéns!", 
				text: "Sua meta foi alcançada!", 
				type: "success",
				timer: 3000,
				confirmButtonColor: "#0F9D58"
			})
		};

		return Math.round(progress * 100) / 100;
	},

	totalSaved: function() {
		var total = 0;

		var transactions = Transactions.find().fetch();

		for (var i=0; i < transactions.length; i++)
			total += transactions[i].save; 
		
		return total;
	},
});