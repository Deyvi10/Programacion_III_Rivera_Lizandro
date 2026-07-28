const herramienta = document.getElementById('herramienta');
let isDragging = false;
let startX = 0;
let scaleValue = 1;

function updateScale(newX) {
    const diffX = newX - startX;
    scaleValue += diffX * 0.005;
    scaleValue = Math.max(0.5, Math.min(2, scaleValue));
    herramienta.style.transform = `scale(${scaleValue})`;
    startX = newX;
}

herramienta.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    startX = e.clientX;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateScale(e.clientX);
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

herramienta.addEventListener('touchstart', (e) => {
    e.preventDefault();
    isDragging = true;
    startX = e.touches[0].clientX;
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updateScale(e.touches[0].clientX);
});

document.addEventListener('touchend', () => {
    isDragging = false;
});

console.log("Taller Mecánico: Redimensionar herramienta listo");