(function ($) {
	$.fn.myPlugin = function(options) {

		$("input").bind("focus", showCalendar);
		var _month = ["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];

		var newDate = new Date(),
			numberDay = newDate.getDate(),
			numberMonth = newDate.getMonth(),
			thisYear = newDate.getFullYear();

		// Гортання місяців вперед
		$(".next").on("click", function() {
			numberMonth++;

			if(numberMonth == 11) {
				numberMonth = 0;
				thisYear++;
			}

			$(".month").text(_month[numberMonth]);
			$(".year").text(thisYear);
			
			newDays("days", thisYear, numberMonth+1);
		});

		// Гортання місяців назад
		$(".prev").on("click",function() {
			numberMonth--;

			if(numberMonth == -1) {
				numberMonth = 11;
				thisYear--;
			}

			$(".month").text(_month[numberMonth]);
			$(".year").text(thisYear);
			newDays("days", thisYear, numberMonth+1);
		});


		$(".datepiker").on("click", "#days td", function(e) {

			// блокування кліка по пустим td
			if($(this).text() == "") {
				e.preventDefault()
				return;
			}

			$(".datepiker").hide();

			var day = $(this).text();
			var month = $(".month").text();
			var year = $(".year").text();
			$("input").val(day + "/" + month + "/" + year);
		});

		function newDays(id, year, month) {
			var element = document.getElementById(id);
			var thisMonth = month - 1;	// місяця від 1 до 12
			var firstDay = new Date(year, thisMonth);
			var table = "<table><thead><tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Нд</th></tr></thead><tbody><tr>";
			for (var i = 0; i < getDay(firstDay); i++) {
				table += '<td class="clearTd"></td>';
			}

			while(firstDay.getMonth() == thisMonth) {
				table += '<td>' + firstDay.getDate() + '</td>';

				if (getDay(firstDay) % 7 == 6) {
			  		table += '</tr><tr>';
				}
				firstDay.setDate(firstDay.getDate() + 1);
			}

			if (getDay(firstDay) != 0) {
				for (var i = getDay(firstDay); i < 7; i++) {
					table += '<td hidden="hidden"></td>';
				}
			}
			table += '</tr></tbody></table>';
			element.innerHTML = table;
		}
		function getDay(date) { 
			var day = date.getDay();

			if (day == 0) day = 7;
				return day - 1;
		}
		
		// показати календар
		function showCalendar() {
			$(".datepiker").show();

			$("#days td").each(function() {
				if($(this).text() == numberDay) {
					$(this).addClass("active");
				}
			});

			$(".month").text(_month[numberMonth]);
			$(".year").text(thisYear);
			newDays("days", thisYear, numberMonth+1)
		}
	}
})(jQuery);