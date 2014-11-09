Meteor.startup(function () {
	return Meteor.methods({
      reset: function() {
        Meteor.users.remove({username: "Judit"}, function(a, b) {
        	console.log("removida");
        	console.log(a);
        	console.log(b);
			Accounts.createUser({username: "Judit", password: "judit123", profile: {
				name: "Judit", 
				goal: {
					type: "Agressivo", 
					name: "Viagem dos Sonhos",
					price: 1000,
					since: new Date("2014/11/01"),
					deadline: new Date("2014/12/31"),
					saveFactor: 0.20,
					saved: 182, //baseado nos valores ali embaixo * 0.20
				}
			}});
        });

        Transactions.remove({}, function() {
        	console.log("removido");
			var names = ["Onibus", "Submarino", "Wallmart", "Cinema", "Cantina", "MCDonalds"];
			var dates = [new Date("2014/11/02"), new Date("2014/11/03"), new Date("2014/11/04"), new Date("2014/11/05"), new Date("2014/11/06"), new Date("2014/11/07")];
			var values = [100, 200, 400, 30, 150, 30]; //soma=910

			for (var i = 0; i < names.length; i++) {
			 	Transactions.insert({name: names[i], date: dates[i], value: values[i], save: values[i]*0.10});
			}
        });
      },
    });
});