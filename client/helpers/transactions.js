Template.transactions.helpers({
	transactions: function () {
	  return Transactions.find({}, {sort: {date: -1}});
	}
});