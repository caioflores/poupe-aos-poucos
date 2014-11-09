UI.registerHelper('momentFromNow', function(date) {
	if(!date) return '-';
	date = new Date(date);

	return moment(date).fromNow();
});

UI.registerHelper('toPercent', function(value) {
	return value*100;
});

