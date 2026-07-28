const campoReparacion = document.getElementById('campo_reparacion');
const botonAgregar = document.getElementById('btn_agregar');
const listaReparaciones = document.getElementById('lista_reparaciones');

botonAgregar.addEventListener('click', function() {
    const reparacion = campoReparacion.value.trim();
    if (reparacion !== '') {
        const li = document.createElement('li');
        li.textContent = reparacion;
        listaReparaciones.appendChild(li);
        campoReparacion.value = '';
    }
});

console.log("Taller Mecánico: Lista de reparaciones lista");