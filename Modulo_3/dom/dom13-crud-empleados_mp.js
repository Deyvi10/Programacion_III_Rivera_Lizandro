// dom13_mp.js
const empleados = [
    {
        "nombre": "Karla",
        "apellido": "Mosquera",
        "sueldo": 450
    },
    {
        "nombre": "Allison",
        "apellido": "Mosquera",
        "sueldo": 600
    },
    {
        "nombre": "Guillermo",
        "apellido": "Mosquera",
        "sueldo": 1000
    }
];

function renderEmpleados() {
    const cuerpoTabla = document.getElementById('cuerpoTabla');
    if (!cuerpoTabla) return;

    cuerpoTabla.innerHTML = '';
    
    empleados.forEach(empleado => {
        const empleadoElement = document.createElement('tr');
        empleadoElement.innerHTML = `
            <td>${empleado.nombre}</td>
            <td>${empleado.apellido}</td>
            <td>$${Number(empleado.sueldo).toFixed(2)}</td>
        `;
        cuerpoTabla.appendChild(empleadoElement);
    });

    actualizarEstadisticas();
}

function agregarEmpleado() {
    const nombreInput = document.getElementById('nombre').value.trim();
    const apellidoInput = document.getElementById('apellido').value.trim();
    const sueldoInput = document.getElementById('sueldo').value.trim();

    if (!nombreInput || !apellidoInput || !sueldoInput) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const nuevoEmpleado = {
        nombre: nombreInput,
        apellido: apellidoInput,
        sueldo: parseFloat(sueldoInput)
    };

    empleados.push(nuevoEmpleado);
    renderEmpleados();
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('sueldo').value = '';
}

function actualizarEstadisticas() {
    const totalempleados = empleados.length;
    
    const promedio = totalempleados > 0 
        ? (empleados.reduce((sum, emp) => sum + emp.sueldo, 0) / totalempleados).toFixed(2) 
        : "0.00";

    const txtTotal = document.getElementById('totalempleados');
    const txtPromedio = document.getElementById('promedioSueldos');

    if (txtTotal) txtTotal.textContent = totalempleados;
    if (txtPromedio) txtPromedio.textContent = promedio;
}

window.onload = function() {
    renderEmpleados();

    const agregarBtn = document.getElementById('btn_agregar');
    if (agregarBtn) {
        agregarBtn.addEventListener('click', agregarEmpleado);
    }
};