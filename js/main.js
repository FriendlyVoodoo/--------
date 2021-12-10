(function () {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger__active');
        document.body.classList.toggle('lock');
        document.querySelector('.header__menu').classList.toggle("animate");
    });
}());
