all:
	handlebars templates/calendar.handlebars -f js/calendar-template.js
	handlebars templates/photos.handlebars -f js/photos-template.js
