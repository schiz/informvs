$(document).ready(function(){
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