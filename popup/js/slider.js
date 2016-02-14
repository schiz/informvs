(function( $ ){
	$.fn.myPlugin = function( options ) {
		$(document).ready(function() {

			// Создаём настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы
			var settings = $.extend({
				countSlides : 6,
				count : 4
			}, options);

			var widthLi = $(".slider li").width(),
				countLi = $(".slider li").length;

			$(".slider ul").css({"width" : widthLi * countLi});

			var position = $(".slider ul").position();
				
				var count = 0,	// позиція left для слайдера
					i = 0,		// index перемика
					im = 999;	// index міні картинки

			$(".mini li img").on("click", function() {
				var index = $(this).attr("data-index");
				$(".slider ul").animate({"left":"-" + index * widthLi + "px"}, 300);
				im = index;
				i = index;
				count = index * widthLi;
			});

			$(".sliderArrow").on("click",function() {
				$(".slider ul").stop();

				if($(this).hasClass("next")) {
					i++;
					count = count + widthLi;

					if(i == countLi || i == countLi + 1) {
						count = 0;
						i = 0;
						$(".slider ul").animate({"left":"0px"}, 300);
						return
					}

					$(".slider ul").animate({"left":"-" + count + "px"}, 300);

				} else {
					i--;

					if(i == -1) {
						count = widthLi * countLi - widthLi;
						i = countLi - 1;
						$(".slider ul").animate({"left":"-" + count + "px"}, 300);
						return
					}

					count = count - widthLi;
					$(".slider ul").animate({"left":"-" + count + "px"}, 300);
				}
			});

			// mini-slider

			var countOne = settings.count,									// кількість слайдів прокрутки за раз
				miniLiWidth = $(".mini li").outerWidth(true),
				countMini = $(".mini li").length
				countSlides = settings.countSlides;				// кількість відображених слайдів

			$(".mini").css({"width" : countMini * widthLi});
			$(".wrap-mini").css({"width" : miniLiWidth * countSlides});

			var countLeft = countMini - countSlides;	// кількість кліків до авто прокрутки на 0;
			var lastMini = countLeft * miniLiWidth;		// прокрутка на останній елемент
			console.log(lastMini);

			var miniGoIndex = 0,		// кількість кліків
				miniGo = 0;				// відстань left

			$(".mini-sliderArrow").on("click", function() {

				$(".mini").stop();

				if ($(this).hasClass("mini-prev")) {
					miniGoIndex++;

					if (miniGoIndex+settings.count > countLeft) {
						miniGoIndex = 0;
						miniGo = 0;
						$(".mini").animate({"left":"0px"}, 300);
						return;
					};

					console.log("prev " + miniGoIndex)
					miniGo = miniGo + miniLiWidth * countOne;
				} else {
					miniGoIndex--;

					if (miniGoIndex < 0) {
						miniGoIndex = countLeft;
						miniGo = lastMini;
						$(".mini").animate({"left":"-" + lastMini + "px"}, 300);
						return;
					};

					console.log("next " + miniGoIndex);
					miniGo = miniGo - miniLiWidth * countOne;
				}

				$(".mini").animate({"left":"-" + miniGo + "px"}, 300);
			});
		});

	};
})( jQuery );