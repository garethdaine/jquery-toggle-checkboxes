/*!
 * jQuery Toggle Checkboxes (https://github.com/garethdaine/jquery-toggle-checkbox)
 * Copyright 2015 Gareth Daine
 * Licensed under MIT (https://github.com/garethdaine/jquery-toggle-checkbox)
 */
(function($) {
	$.fn.toggleCheckboxes = function() {
		// Get all checkbox elements
		checkboxes = $(':checkbox').not(this);

		// Check if the checkboxes are checked/unchecked and if so uncheck/check them
		if(this.is(':checked')) {
			checkboxes.prop('checked', true);
		} else {
			checkboxes.prop('checked', false);
		}
	}
}(jQuery));