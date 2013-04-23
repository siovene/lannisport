$(document).ready(function() {
	// Every image referenced from a Markdown document
	$("article img").each(function() {
		// Let's put a caption if there is one
		if($(this).attr("title"))
			$(this).wrap('<figure class="image"></figure>')
				.after('<figcaption>'+$(this).attr("title")+'</figcaption>');
		});
});
