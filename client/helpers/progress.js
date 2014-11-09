Template.progress.helpers({
	
	progressNow: function() {
		var transactions = Transactions.find().fetch();
		var userGoal = Meteor.user().profile.goal.price;
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
	progressComplete: function() {
		var transactions = Transactions.find().fetch();
		var userGoal = Meteor.user().profile.goal.price;
		var total = 0;

		for (var i=0; i < transactions.length; i++)
			total += transactions[i].save;

		var teste = (total*100)/userGoal;

		if (teste >= 100) {
			swal({
				title: "Parabéns!", 
				text: "Sua meta foi alcançada!", 
				type: "success",
				timer: 3000,
				confirmButtonColor: "#0F9D58"
			})
		};
	}



});