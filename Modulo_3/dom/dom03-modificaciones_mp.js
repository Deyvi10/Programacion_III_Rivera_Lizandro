const btnCompletar1 = document.getElementById('btn-completar-1');
const btnCompletar2 = document.getElementById('btn-completar-2');
const estado1 = document.getElementById('estado-1');
const estado2 = document.getElementById('estado-2');
const orden1 = document.getElementById('orden-1');
const orden2 = document.getElementById('orden-2');

btnCompletar1.addEventListener('click', () => {
    estado1.textContent = 'Completada';
    estado1.style.color = 'green';
    orden1.style.backgroundColor = '#d4edda';
});

btnCompletar2.addEventListener('click', () => {
    estado2.textContent = 'Completada';
    estado2.style.color = 'green';
    orden2.style.backgroundColor = '#d4edda';
});

console.log("Taller Mecánico: Modificación de órdenes lista");