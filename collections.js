Transactions = new Mongo.Collection("transactions");

Meteor.startup(function () {
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

    for (var i = 0; i < names.length; i++)
      Transactions.insert({name: names[i], date: dates[i], value: values[i]});
  }
  if (Users.find().count() === 0) {
  	Meteor.loginWithPassword
  }
});

I= = new Mongo.Collection("goal");