# jQuery Toggle Checkboxes

A rather simple jQuery plugin that checks/unchecks all enabled checkboxes on a page based on the change state of another single checkbox.

## Usage

Using this simple jQuery plugin is pretty straightforward.

### Install with Bower

    bower install jquery-toggle-checkboxes

### Include the Plugin

Include either the minified version or the development version in your document. I recommend adding it to your footer just before the closing body tag but you can also add it to the head of your document. <strong>NOTE</strong>: You must include jQuery before the Toggle Checkboxes plugin.

    <script src="jquery.toggleCheckboxes.min.js"></script>

### Attach the Plugin

Next, simply attach the plugin to your 'check all' checkbox, like so.
      
    $('#check-all').change(function() {
      $(this).toggleCheckboxes();
    });

Alternatively, you can attach the plugin via the jQuery on('change') event for use with dynamically generated forms, such as when using AJAX requests to add new checkbox fields.

    $(document).on('change', '#check-all', function() {
      $(this).toggleCheckboxes();
    });