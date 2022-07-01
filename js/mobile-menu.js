const boton = document.querySelector('#menu-botton');
const menu = document.querySelector('#menu');
const close = document.querySelector('#btn-close');

boton.addEventListener('click', () => {
    menu.classList.toggle("hidden")
})

close.addEventListener('click', () => {
    menu.classList.toggle("hidden")
})