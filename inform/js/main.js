$(document).ready(function(){
	$(".show-popup").on("click",function(){
		$(".popup").show();
	});
	$(".closed").on("click",function(){
		$(".popup").hide();
		$(".popup-send").hide();
		$(".aside-popup-send").hide();
		$(".popup-detail").hide();
		$(".sertificates-js").hide();
	});
	$(".popup .button-input").on("click", function(e){
		// NAME
		var title = $(".popup .name-input").val();
		var regTitle = /^[А-ЯёЁіІ"'а-я\-\w\040\s0-9]{2,50}$/im;
		var resultTitle = title.search(regTitle);
		if(resultTitle !== 0){
			e.preventDefault();
			$(".popup .name-input").addClass("error");
		}
		else{
			$(".popup .name-input").removeClass("error");
		}
		// PHONE
		var phone = $(".popup .tel-input").val();
		var regPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
		var resultPhone = phone.search(regPhone);
		if(resultPhone !== 0){
			e.preventDefault();
			$(".popup .tel-input").addClass("error");
		}
		else{
			$(".popup .tel-input").removeClass("error");
		}

		if(resultPhone !== 0 || resultTitle !== 0){
			$(".message-error").show();
		}
		else{
			$(".message-error").hide();
		}
		if(resultPhone == 0 && resultTitle == 0){
			$(".popup").hide();
			$(".popup-send").show();
		}
	});
	/* help */
	$(".help-button").on("click", function(e){
		// NAME COM
		var titleCom = $(".name-com-help").val();
		var regTitleCom = /^[А-ЯёЁіІ"'а-я\-\w\040\s0-9]{2,50}$/im;
		var resultTitleCom = titleCom.search(regTitleCom);
		if(resultTitleCom !== 0){
			e.preventDefault();
			$(".name-com-help").addClass("error");
		}
		else{
			$(".name-com-help").removeClass("error");
		}
		// NAME
		var title = $(".name-help").val();
		var regTitle = /^[А-ЯёЁіІ"'а-я\-\w\040\s0-9]{2,50}$/im;
		var resultTitle = title.search(regTitle);
		if(resultTitle !== 0){
			e.preventDefault();
			$(".name-help").addClass("error");
		}
		else{
			$(".name-help").removeClass("error");
		}
		// EMAIL
		var email = $(".email-help").val();
		var regEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
		var resultEmail = email.search(regEmail);
		if(resultEmail !== 0){
			e.preventDefault();
			$(".email-help").addClass("error");
		}
		else{
			$(".email-help").removeClass("error");
		}

		if(resultTitleCom !== 0 || resultEmail !== 0 || resultTitle !== 0){
			$(".message-error-help").show();
			$("aside").addClass("new-style-help");
		}
		else{
			e.preventDefault();
			$(".message-error-help").hide();
			$("aside").removeClass("new-style-help");
			$(".aside-popup-send").show();
		}
	});
});