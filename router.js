//
//CONFIGURATION
//
Router.configure({
	layoutTemplate: 'index'
});

//
//PRIVATE ROUTES
//
Router.onBeforeAction(function() {
	if(!Meteor.user()) {
		this.render(null);
	} else {
		this.next();
	}
}, {except: ['index', 'login', 'logout', 'signup']});

//
//HOME
//
Router.route('/', function() {
	this.render('home');
});

//
//SIMULATION
//
Router.route('/simulation');
