jQuery.fn.autohidebacktotop = function() {
	if ($("html, body").height() <= $(window).height()) {
		$("#autohidebacktotop").remove();
	}
	this.bind("click", function() {
		$("html, body").animate({scrollTop:0});
		return false;
	});
};

jQuery(document).ready(function($) {
	// Auto-handle direct jpeg links
	$('a[href$="jpg"]').each(function() {
        $(this).colorbox({
            maxWidth: '100%'
        });
	});

    $("#back-to-top").autohidebacktotop();

    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#back-to-top:hidden').stop(true, true).fadeIn();
        } else {
            $('#back-to-top').stop(true, true).fadeOut();
        }
    });
});


