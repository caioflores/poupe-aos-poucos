//
//CONFIGURATION
//
Router.configure({
	layoutTemplate: 'index'
});

//
//HOME
//
Router.route('/', function() {
	this.render('home');
});