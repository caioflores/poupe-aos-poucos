Template.transactions.rendered = function() {
	this.$('#transactions .item').addClass('no-effect');
}

Template.transactions.helpers({
	transactions: function () {
	  return Transactions.find({}, {sort: {date: -1}, limit: 4});
	}
});