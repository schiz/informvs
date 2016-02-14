$(document).ready(function(){
/* Select */
	(function($) {
		$(function() {
			$('select').styler();
		});
	})(jQuery);
	/* Validator */
	$(".server-solutions-block .button-red").on("click", function(){
		$(".popup-detail").show();
	});
	$(".popup-detail .button-datail").on("click", function(e){
		// company
		var company = $(".popup-detail .name-company").val();
		if(company.length == 0){
			e.preventDefault();
			$(".popup-detail .name-company").addClass("error");
		}
		else{
			$(".popup-detail .name-company").removeClass("error");
		}
		// COUNT
		var count = $(".popup-detail .field-activity").val();
		if(count.length == 0){
			e.preventDefault();
			$(".popup-detail .field-activity").addClass("error");
		}
		else{
			$(".popup-detail .field-activity").removeClass("error");
		}
		if(company.length == 0 || count.length == 0){
			$(".message-error-detail").show();
		}
		else{
			$(".message-error-detail").hide();
			if(company.length !== 0 || count.length !== 0){
				e.preventDefault();
				$(".popup-detail").hide();
				$(".aside-popup-send").show();
			}
		}
	});
	$(".button-arenda").on("click", function(e){
		// EMAIL
		var email = $(".mail-arenda").val();
		var regEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
		var resultEmail = email.search(regEmail);
		if(resultEmail !== 0){
			e.preventDefault();
			$(".mail-arenda").addClass("error");
		}
		else{
			$(".mail-arenda").removeClass("error");
		}
	});

	$(".server-solutions").each(function(){
		var height = $(this).height();
		$(this).height(height);
	})
});