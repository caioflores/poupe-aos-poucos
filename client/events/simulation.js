Template.simulation.events({
	'submit form': function(e, template) {
		e.preventDefault();

	    var data 	= {};
	    data.name	= $('[name=product]').val();
	    data.value	= $('[name=price]').val();
	    data.date	= new Date();
	    data.save	= data.value * Meteor.user().profile.saveFactor;
		
		Transactions.insert(data, function(error, result) {
			if(error) {
				alert(error);
			} else if(result) {
				$('form')[0].reset();
				alert("Compra realizada! Observe o Darshboard na apresentacao");
			}
		});

		return false;
	}
});