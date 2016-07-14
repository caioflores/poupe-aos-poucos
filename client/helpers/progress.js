Template.progress.helpers({
	progressNow: function() {
		var goal 			= Meteor.user().profile.goal.price;
		var goalSinceDate 	= Meteor.user().profile.goal.since;
		var saved 			= Meteor.user().profile.goal.saved;
		
		var progress = saved / goal * 100;
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
	}
});