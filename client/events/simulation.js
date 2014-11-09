Template.simulation.events({
	'submit form': function(e, template) {
		e.preventDefault();

	    var data 	= {};
	    data.name	= $('[name=product]').val();
	    data.value	= $('[name=price]').val();
	    data.date	= new Date();
	    data.save	= data.value * Meteor.user().profile.goal.saveFactor;
		
		Transactions.insert(data, function(error, result) {
			if(error) {
				alert(error);
			} else if(result) {
				console.log("Compra realizada! Observe o Darshboard na apresentacao");
				$('form')[0].reset();
			}
		});

		return false;
	}
});