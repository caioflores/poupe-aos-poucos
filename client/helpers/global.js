UI.registerHelper('momentFromNow', function(date) {
	if(!date) return '-';
	date = new Date(date);

	return moment(date).fromNow();
});