// dom05-mouse-touch.js
const caja = document.getElementById('caja');
caja.addEventListener('mouseover', () => {
    caja.style.backgroundColor = 'yellow';
});
caja.addEventListener('mouseout', () => {
    caja.style.backgroundColor = 'aliceblue';
});

caja.addEventListener('click', () => {
    alert('¡Has hecho clic en la vista previa del curso!');
});

const area = document.getElementById('areaTouch');
area.addEventListener('touchstart', () => {
    area.style.backgroundColor = 'green';
});

area.addEventListener('touchend', () => {
    area.style.backgroundColor = 'darkblue';
});