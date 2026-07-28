const repuesto = document.getElementById('repuesto');
let colores = ['red', 'green', 'blue', 'orange', 'purple', 'pink'];
let colorActual = 0;
let arrastrando = false;

function cambiarColor() {
    colorActual = (colorActual + 1) % colores.length;
    repuesto.style.background = colores[colorActual];
}

function moverRepuesto(x, y) {
    const container = document.getElementById('container');
    const containerRect = container.getBoundingClientRect();
    const repuestoRect = repuesto.getBoundingClientRect();
    const mitadAncho = repuestoRect.width / 2;
    const mitadAlto = repuestoRect.height / 2;

    const offsetTop = containerRect.top + window.scrollY;
    const offsetLeft = containerRect.left + window.scrollX;

    repuesto.style.left = (x - offsetLeft - mitadAncho) + 'px';
    repuesto.style.top = (y - offsetTop - mitadAlto) + 'px';
}

repuesto.addEventListener('touchstart', (e) => {
    e.preventDefault();
    cambiarColor();
    arrastrando = true;
});

document.addEventListener('touchmove', (e) => {
    if (!arrastrando) return;
    const touch = e.touches[0];
    moverRepuesto(touch.pageX, touch.pageY);
});

document.addEventListener('touchend', () => {
    arrastrando = false;
});

repuesto.addEventListener('mousedown', (e) => {
    e.preventDefault();
    cambiarColor();
    arrastrando = true;
});

document.addEventListener('mousemove', (e) => {
    if (!arrastrando) return;
    moverRepuesto(e.clientX, e.clientY);
});

document.addEventListener('mouseup', () => {
    arrastrando = false;
});

console.log("Taller Mecánico: Arrastrar repuesto listo");