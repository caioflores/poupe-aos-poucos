UI.registerHelper('momentFromNow', function(date) {
	if(!date) return '-';
	date = new Date(date);

	return moment(date).fromNow();
});

UI.registerHelper('momentFormat', function(date, format) {
	if(!date) return '';
	date = new Date(date);

	return moment(date).format(format);
});

UI.registerHelper('toPercent', function(value) {
	return value*100;
});