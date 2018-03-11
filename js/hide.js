$(document).ready(function(){
		 $('.hidden-link').click(function(){
		  $(this).parent().children('section.hidden-body').toggle('normal');
		  return false;
		});
	});