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
		//prevent from showing login page on app startup when already logged
		this.wait(function() {return !Meteor.loggingIn(); });

		if(this.ready()) {
			this.render('login');
		} else {
			this.render(null);
		}
	} else {
		this.next();
	}
}, {except: ['signup', 'login', 'logout']});


//
//LOGIN & SIGNUP
//
Router.route('/login', function() {
	if(Meteor.userId()) {
		this.redirect('home');
	} else {
		Session.set('isSignup', false);
		this.render('login');
	}
});

Router.route('/logout', function() {
	Meteor.logout(function() {
		Router.go('login');
	});
});

Router.route('/signup', function() {
	Session.set('isSignup', true);
	this.render('login');
});

//
//HOME
//
Router.route('/', function() {
	this.render('home');
}, {name: 'home'});

//
//GOAL
//
Router.route('/goal');

//
//SIMULATION
//
Router.route('/simulation', function() {
	this.layout('simulation');
});