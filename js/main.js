(function () {
	const burger = document.querySelector('.burger');
	burger.addEventListener('click', () => {
		burger.classList.toggle('burger_active');
		document.body.classList.toggle('lock');
		document.querySelector('.header_menu').classList.toggle("animate");
	});
}());
