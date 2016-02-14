$(document).ready(function(){
	$(".switch-mini").on("click",function(){
		$(".switch-big").hide();
		$(".switch-mini").removeClass("active");
	});
	$(".switch-mini1").on("click",function(){
		$(".switch-big1").show();
		$(".switch-mini1").addClass("active");
	});
	$(".switch-mini2").on("click",function(){
		$(".switch-big2").show();
		$(".switch-mini2").addClass("active");
	});
	$(".switch-mini3").on("click",function(){
		$(".switch-big3").show();
		$(".switch-mini3").addClass("active");
	});
	$(".switch-mini4").on("click",function(){
		$(".switch-big4").show();
		$(".switch-mini4").addClass("active");
	});
	$(".switch-mini5").on("click",function(){
		$(".switch-big5").show();
		$(".switch-mini5").addClass("active");
	});
	$(".order").on("click",function(){
		$(".popup-detail").show();
	});
	/* Select */
	(function($) {
		$(function() {
			$('select').styler();
		});
	})(jQuery);
	/* Validator */
	$(".popup-detail .button-datail").on("click", function(e){
		// PHONE
		var phone = $(".popup-detail .tel-number-detail").val();
		var regPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
		var resultPhone = phone.search(regPhone);
		if(resultPhone !== 0){
			e.preventDefault();
			$(".popup-detail .tel-number-detail").addClass("error");
		}
		else{
			$(".popup-detail .tel-number-detail").removeClass("error");
		}
		// COUNT
		var count = $(".popup-detail .users-count").val();
		var regCount =  /^\d+$/;
		var resultCount = count.search(regCount);
		if(resultCount !== 0){
			e.preventDefault();
			$(".popup-detail .users-count").addClass("error");
		}
		else{
			$(".popup-detail .users-count").removeClass("error");
		}

		if(resultPhone !== 0 || resultCount !== 0){
			$(".message-error-detail").show();
		}
		else{
			$(".message-error-detail").hide();
		}
		if(resultPhone == 0 && resultCount == 0){
			$(".popup-detail").hide();
			$(".aside-popup-send").show();
		}
	});
	$(".questions-and-answers > div a").bind("click",questions);
	function questions(e){
		e.preventDefault()
		if($(this).parent().children("p").hasClass("questions-click")){
			$(this).parent().children("p").removeClass("questions-click").slideUp()
			return false;
		}
		else{
			$(".questions-and-answers > div p").removeClass("questions-click").slideUp();
			$(this).parent().children("p").addClass("questions-click").slideDown();
		}
	}
});