const vehiculos = [
    { placa: "ABC-1234", marca: "Toyota", modelo: "Corolla", year: 2020, color: "Blanco" },
    { placa: "DEF-5678", marca: "Mazda", modelo: "3", year: 2019, color: "Rojo" },
    { placa: "GHI-9012", marca: "Hyundai", modelo: "Accent", year: 2021, color: "Azul" }
];

const infoDiv = document.getElementById('info-vehiculo');

vehiculos.forEach(v => {
    const parrafo = document.createElement('p');
    parrafo.textContent = `Placa: ${v.placa} - ${v.marca} ${v.modelo} (${v.year}) - Color: ${v.color}`;
    infoDiv.appendChild(parrafo);
});

console.log("Taller Mecánico: Visualización de vehículos cargada");