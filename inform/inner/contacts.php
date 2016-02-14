<?php include("_header.html"); ?>
<script src="http://api-maps.yandex.ru/2.0-stable/?load=package.standard&amp;lang=ru-RU" type="text/javascript"></script>
<div class="product-img">
	<div class="center clearfix">
		<div class="top-menu content-top-menu">
			<ul class="product-menu">
				<li><a href="#">Главная</a></li>   
				<li>Контакты</li>
			</ul>
			<h1>Контакты</h1>
		</div>
	</div>
</div>
<div class="center">
	<div class="title-contacts">ООО “Информ-ВС”</div>
	<table class="contacts-table">
		<tr>
			<td>Адрес.................</td>
			<td>Москва, ул Спасский тупик, дом 8, стр. 1</td>
		</tr>
		<tr>
			<td>Режим работы...</td>
			<td>09:00 - 18:00 (по рабочим дням)</td>
		</tr>
		<tr>
			<td>Телефон............</td>
			<td>+7(495) 966-0501</td>
		</tr>
		<tr>
			<td>E-mail.................</td>
			<td><a href="#">info@inform-vs.ru</a></td>
		</tr>
	</table>
	<div class="print-contact"><a href="#">Версия для печати</a></div>
	<script type="text/javascript">
		var myMap;
		ymaps.ready(function () {
		myMap = new ymaps.Map("map", {
			center: [55.774363,37.645503],
			zoom: 16
		});
		var myPlacemark = new ymaps.Placemark([55.774363,37.645503], {}, {
			iconImageHref: '../img/loveC.png',
			iconImageSize: [33, 29],
			iconImageOffset: [-20, -38]
		});
		myMap.geoObjects.add(myPlacemark);
		});
	</script>
	<div id="map" style="width: 100%; height: 459px;"></div>
</div>
<?php include("_footer.html"); ?>