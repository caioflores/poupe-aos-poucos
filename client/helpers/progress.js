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
				text: "Agora você pode realizar seu sonho!", 
				type: "success",
				timer: 3000,
				confirmButtonColor: "#0F9D58",
			})
		};

		return Math.round(progress * 100) / 100;
	},

	totalSaved: function() {
		var goalSinceDate = Meteor.user().profile.goal.since;
		var transactionsAfterGoal = Transactions.find({date: {$gte: goalSinceDate}}).fetch();

		var total = 0;
		for (var i=0; i < transactionsAfterGoal.length; i++)
			total += transactionsAfterGoal[i].save; 
		
		return total;
	},
});