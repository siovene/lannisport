jQuery(document).ready(function($) {
	// Auto-handle direct jpeg links
	$('a[href$="jpg"]').each(function() {
        $(this).colorbox({
            maxWidth: '100%'
        });
	});
});
