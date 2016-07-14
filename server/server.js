Meteor.startup(function () {
	return Meteor.methods({
      reset: function() {
      	var saveFactor = 0.20;

        Meteor.users.remove({username: "Judit"}, function(a, b) {
			Accounts.createUser({username: "Judit", password: "judit123", profile: {
				name: "Judit", 
				goal: {
					type: "Agressivo", 
					name: "Brinquedo para o meu filho",
					price: 400,
					since: new Date("2014/11/01"),
					deadline: new Date("2014/12/25"),
					saveFactor: saveFactor,
					saved: 182, //baseado nos valores ali embaixo * 0.20
				}
			}});
        });

        Transactions.remove({}, function() {
			var names = ["Onibus", "Submarino", "Wallmart", "Cinema", "Cantina", "MCDonalds"];
			var dates = [new Date("2014/11/07"), new Date("2014/11/08"), new Date("2014/11/08"), new Date("2014/11/09"), new Date("2014/11/09"), new Date("2014/11/09")];
			var values = [100, 200, 400, 30, 150, 30]; //soma=910

			for (var i = 0; i < names.length; i++) {
			 	Transactions.insert({name: names[i], date: dates[i], value: values[i], save: values[i] * saveFactor});
			}
        });
      },
    });
});