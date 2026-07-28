const mecanicos = [
    {
        "nombre": "Carlos",
        "apellido": "Rivera",
        "especialidad": "Mecánico General",
        "salario": 1200
    },
    {
        "nombre": "Pedro",
        "apellido": "López",
        "especialidad": "Electricidad Automotriz",
        "salario": 1500
    },
    {
        "nombre": "Miguel",
        "apellido": "Sánchez",
        "especialidad": "Transmisión",
        "salario": 1800
    }
];

function renderMecanicos() {
    const cuerpoTabla = document.getElementById('cuerpoTabla');
    if (!cuerpoTabla) return;

    cuerpoTabla.innerHTML = '';
    
    mecanicos.forEach(mecanico => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${mecanico.nombre}</td>
            <td>${mecanico.apellido}</td>
            <td>${mecanico.especialidad}</td>
            <td>$${Number(mecanico.salario).toFixed(2)}</td>
        `;
        cuerpoTabla.appendChild(fila);
    });

    actualizarEstadisticas();
}

function agregarMecanico() {
    const nombreInput = document.getElementById('nombre').value.trim();
    const apellidoInput = document.getElementById('apellido').value.trim();
    const especialidadInput = document.getElementById('especialidad').value.trim();
    const salarioInput = document.getElementById('salario').value.trim();

    if (!nombreInput || !apellidoInput || !especialidadInput || !salarioInput) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const nuevoMecanico = {
        nombre: nombreInput,
        apellido: apellidoInput,
        especialidad: especialidadInput,
        salario: parseFloat(salarioInput)
    };

    mecanicos.push(nuevoMecanico);
    renderMecanicos();
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('especialidad').value = '';
    document.getElementById('salario').value = '';
}

function actualizarEstadisticas() {
    const totalMecanicos = mecanicos.length;
    
    const promedio = totalMecanicos > 0 
        ? (mecanicos.reduce((sum, mec) => sum + mec.salario, 0) / totalMecanicos).toFixed(2) 
        : "0.00";

    const txtTotal = document.getElementById('totalMecanicos');
    const txtPromedio = document.getElementById('promedioSalarios');

    if (txtTotal) txtTotal.textContent = totalMecanicos;
    if (txtPromedio) txtPromedio.textContent = promedio;
}

window.onload = function() {
    renderMecanicos();

    const agregarBtn = document.getElementById('btn_agregar');
    if (agregarBtn) {
        agregarBtn.addEventListener('click', agregarMecanico);
    }
};

console.log("Taller Mecánico: CRUD de mecánicos listo");