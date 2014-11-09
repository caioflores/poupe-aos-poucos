Template.goal.events({
	'submit form[name=newGoal]': function(e, template) {
		e.preventDefault();

		var goal 		= {};
	    goal.name		= $('[name=goal]').val();
	    goal.price		= $('[name=price]').val();
	    goal.since		= new Date();
	    goal.deadline	= new Date($('[name=deadline]').val());
	    goal.saveFactor	= 0.20;
	    goal.saved		= 0;

	    if(!(goal.name && goal.price && goal.deadline)) return false;

	    Meteor.users.update(Meteor.userId(), {$set: {'profile.goal': goal}}, function(error, result) {
	    	if(error) {
		    	console.dir(error);
		    	alert(error.reason);

	    	} else if(result) {
	    		console.dir(result);
	    		Router.go('home');
	    	}
	    });
	},

	'keyup input#goal': function(e, template) {
		if(!e.target.value) {
			Session.set('goal', null);
		}
	},

	'change input#goal': function(e, template) {
		Session.set('goal', e.target.value);
		Session.set('goalPrice', null);
	},

	'change input#price': function(e, template) {
		Session.set('goalPrice', e.target.value);
	},
});