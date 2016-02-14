$(document).ready(function(){
	$(".fancybox-effects-a").fancybox({
		helpers: {
			title : {
				type : 'outside'
			},
			overlay : {
				speedOut : 0,
				css : {
					'background' : 'rgba(0,0,0,.1)',
				}
			}
		}
	});
});