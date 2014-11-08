Meteor.startup(function () {
	if (Meteor.users.find().count() == 1) {
		Meteor.loginWithPassword("Judit", "judit123");
	}else{
		Accounts.createUser({username: "Judit", password: "judit123", profile: {type: "precavido", deadline: "31/12/2014", goal: 10000}});
	}

	if (Transactions.find().count() === 0) {
		var names = ["Submarino",
		             "MCDonalds",
		             "Wallmart",
		             "Cinema",
		             "Cantina",
		             "Nike"];
		var dates = ["11/11/11",
		             "12/12/12",
		             "01/01/01",
		             "02/02/02",
		             "03/03/03",
		             "04/04/04"];
		var values = [100,
		        200,
		        300,
		        4000,
		        500,
		        7000];

		//User "conservador"
		var userTypeFactor = 10;

		for (var i = 0; i < names.length; i++)
		 	Transactions.insert({name: names[i], date: dates[i], value: values[i], save: (values[i]*userTypeFactor)/100});
	}
});