$(document).ready(function(){
	$('a').click(function(){
		console.log('button was clicked');
		$('.colorKey').toggleClass('blue');
		console.log('class was changed');
	})

$(window).scroll(function(scrollFunction){
	console.log('user has scrolled');
	$(window).off('scroll');
	$('.colorKey').toggleClass('good');
})

});