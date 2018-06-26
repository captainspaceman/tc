$(document).ready(function(){
	$('a').click(function(){
		console.log('button was clicked');
		$('#example').toggleClass('show');
		console.log('class was changed');
	})
});