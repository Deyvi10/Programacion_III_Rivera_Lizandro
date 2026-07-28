const vehiculos = [
    { placa: "ABC-1234", marca: "Toyota", modelo: "Corolla", year: 2020 },
    { placa: "DEF-5678", marca: "Mazda", modelo: "3", year: 2019 },
    { placa: "GHI-9012", marca: "Hyundai", modelo: "Accent", year: 2021 }
];

function renderVehiculos() {
    const cuerpoTabla = document.getElementById('cuerpoTabla');
    if (!cuerpoTabla) return;

    cuerpoTabla.innerHTML = '';

    vehiculos.forEach((vehiculo, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${vehiculo.placa}</td>
            <td>${vehiculo.marca}</td>
            <td>${vehiculo.modelo}</td>
            <td>${vehiculo.year}</td>
            <td>
                <button class="btn-editar" onclick="editarVehiculo(${index})">Editar</button>
                <button class="btn-eliminar" onclick="eliminarVehiculo(${index})">Eliminar</button>
            </td>
        `;
        cuerpoTabla.appendChild(fila);
    });
}

function agregarVehiculo() {
    const placa = document.getElementById('placa').value.trim();
    const marca = document.getElementById('marca').value.trim();
    const modelo = document.getElementById('modelo').value.trim();
    const year = document.getElementById('year').value.trim();

    if (!placa || !marca || !modelo || !year) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    vehiculos.push({ placa, marca, modelo, year: parseInt(year) });
    renderVehiculos();
    limpiarFormulario();
}

function eliminarVehiculo(index) {
    vehiculos.splice(index, 1);
    renderVehiculos();
}

function editarVehiculo(index) {
    const vehiculo = vehiculos[index];
    document.getElementById('placa').value = vehiculo.placa;
    document.getElementById('marca').value = vehiculo.marca;
    document.getElementById('modelo').value = vehiculo.modelo;
    document.getElementById('year').value = vehiculo.year;
    vehiculos.splice(index, 1);
    renderVehiculos();
}

function limpiarFormulario() {
    document.getElementById('placa').value = '';
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('year').value = '';
}

window.onload = function() {
    renderVehiculos();
    const agregarBtn = document.getElementById('btn_agregar');
    if (agregarBtn) {
        agregarBtn.addEventListener('click', agregarVehiculo);
    }
};

console.log("Taller Mecánico: CRUD de vehículos listo");