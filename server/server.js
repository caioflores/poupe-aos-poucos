Meteor.startup(function () {
	if (Meteor.users.find().count() == 0) {
		Accounts.createUser({username: "Judit", password: "judit123", profile: {name: "Judit", type: "convervador", saveFactor: 0.10, deadline: "31/12/2014", goal: 10000}});
	}
	
	if(Transactions.find().count() == 0) {
		var names = ["Submarino", "MCDonalds", "Wallmart", "Cinema", "Cantina", "Nike"];
		var dates = [new Date("2011/11/01"), new Date("2012/12/01"), new Date("2011/11/01"), new Date("2010/02/01"), new Date("2009/03/01"), new Date("2008/04/01")];
		var values = [100, 200, 300, 4000, 500, 7000];

		for (var i = 0; i < names.length; i++) {
		 	Transactions.insert({name: names[i], date: dates[i], value: values[i], save: values[i]*0.10});
		}
	}
});