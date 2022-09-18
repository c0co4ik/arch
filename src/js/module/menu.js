const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');
const gamb = document.querySelector('.gamb');

const ACTIVE__CLASS = 'header__menu_active'

gamb && gamb.addEventListener('click', () => {
  menu.classList.add(ACTIVE__CLASS);
});

close && close.addEventListener('click', () => {
  menu.classList.remove(ACTIVE__CLASS);
})