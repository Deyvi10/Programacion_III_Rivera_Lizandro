// dom04-eventos.js
function mostrarAlerta() {
    alert('¡Bienvenido al nuevo curso online!');
}

function agregarCurso() {
    const lista = document.getElementById('lista-productos1');
    const nuevoCurso = document.createElement('li');
    nuevoCurso.textContent = 'Curso de NestJS y TypeScript';
    lista.appendChild(nuevoCurso);
}

document.getElementById('btn3').addEventListener('click', () => {
    const lista2 = document.getElementById('lista-productos2');
    const nuevoCurso = document.createElement('li');
    nuevoCurso.textContent = 'Curso de React Avanzado desde evento listener';
    lista2.appendChild(nuevoCurso);
});