// dom08-mouse-touch.js
const triangulo = document.getElementById('triangulo');
let isDragging = false;
let startX = 0;
let scaleValue = 1;

// Función para actualizar tamaño
function updateScale(newX) {
   const diffX = newX - startX;
   scaleValue += diffX * 0.005; // Ajustar sensibilidad
   scaleValue = Math.max(0.5, Math.min(2, scaleValue)); // Limitar entre 0.5x y 2x
   triangulo.style.transform = `scale(${scaleValue})`;
   startX = newX; // Actualizar la posición para el siguiente movimiento
}

// MOUSE Events
triangulo.addEventListener('mousedown', (e) => {
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

// TOUCH Events
triangulo.addEventListener('touchstart', (e) => {
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