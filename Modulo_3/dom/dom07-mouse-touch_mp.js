// dom07-mouse-touch.js
const boton = document.getElementById('botonAnimado');

// Aumentar tamaño
function agrandar() {
   boton.style.transform = 'scale(1.2)';
   boton.style.backgroundColor = 'coral';
}

// Volver a tamaño normal
function normalizar() {
   boton.style.transform = 'scale(1)';
   boton.style.backgroundColor = 'darkcyan';
}

// Mouse events
boton.addEventListener('mouseenter', agrandar);
boton.addEventListener('mouseleave', normalizar);

// Touch events
boton.addEventListener('touchstart', (e) => {
   e.preventDefault();
   agrandar();
});
boton.addEventListener('touchend', normalizar);