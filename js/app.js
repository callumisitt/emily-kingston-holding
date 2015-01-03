function resizeHover()
{
	$('.hover').each(function() {
		var imageHeight = $(this).find('img').height();
		if (imageHeight > 0) {
  		$(this).height((imageHeight / 2));
		}
  });
}

$(document).foundation();
$(window).bind('resize', resizeHover);
resizeHover();