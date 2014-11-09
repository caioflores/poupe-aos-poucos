Meteor.startup(function () {
	if (Meteor.users.find().count() == 0) {
		Accounts.createUser({username: "Judit", password: "judit123", profile: {
			name: "Judit", 
			goal: {
				type: "convervador", 
				name: "Viagem dos Sonhos Teste",
				price: 2000,
				since: new Date("2014/11/01"),
				deadline: new Date("2014/12/31"), 
				saveFactor: 0.20, 
			}
		}});
	}
	
	if(Transactions.find().count() == 0) {
		var names = ["Submarino", "MCDonalds", "Wallmart", "Cinema", "Cantina", "Nike"];
		var dates = [new Date("2014/11/02"), new Date("2014/11/03"), new Date("2014/11/04"), new Date("2014/11/05"), new Date("2014/11/06"), new Date("2014/11/07")];
		var values = [100, 200, 300, 4000, 500, 7000];

		for (var i = 0; i < names.length; i++) {
		 	Transactions.insert({name: names[i], date: dates[i], value: values[i], save: values[i]*0.10});
		}
	}
});