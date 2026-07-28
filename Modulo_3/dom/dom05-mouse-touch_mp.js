const vehiculo = document.getElementById('vehiculo');
vehiculo.addEventListener('mouseover', () => {
    vehiculo.style.backgroundColor = 'yellow';
});
vehiculo.addEventListener('mouseout', () => {
    vehiculo.style.backgroundColor = 'lightgray';
});

vehiculo.addEventListener('click', () => {
    alert('¡Vehículo seleccionado para revisión!');
});

const areaHerramienta = document.getElementById('areaHerramienta');
areaHerramienta.addEventListener('touchstart', () => {
    areaHerramienta.style.backgroundColor = 'green';
});

areaHerramienta.addEventListener('touchend', () => {
    areaHerramienta.style.backgroundColor = 'blue';
});

console.log("Taller Mecánico: Interacción con vehículos lista");