// dom12_mp.js
const productos = [
    {
        "id": 1,
        "nombre": "teclado",
        "descripcion": "Teclado mecánico",
        "precio": 10.99
    },
    {
        "id": 2,
        "nombre": "Mouse",
        "descripcion": "Mouse",
        "precio": 19.99
    },
    {
        "id": 3,
        "nombre": "Monitor",
        "descripcion": "Monitor 19 pulgadas",
        "precio": 500.49
    }
];

function renderProductos() {
    const cuerpoTabla = document.getElementById('cuerpoTabla');
    if (!cuerpoTabla) return;

    cuerpoTabla.innerHTML = '';
    productos.forEach(producto => {
        const productoElement = document.createElement('tr');
        productoElement.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precio.toFixed(2)}</td>
            <td>
                <button onclick="editarProducto(${producto.id})">Editar</button>
                <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
            </td>
        `;
        cuerpoTabla.appendChild(productoElement);
    });
    actualizarEstadisticas();
}

function agregarProducto() {
    const nombreInput = document.getElementById('nombre').value.trim();
    const descripcionInput = document.getElementById('descripcion').value.trim();
    const precioInput = document.getElementById('precio').value.trim();

    if (!nombreInput || !descripcionInput || !precioInput) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const nuevoProducto = {
        id: productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1,
        nombre: nombreInput,
        descripcion: descripcionInput,
        precio: parseFloat(precioInput)
    };

    productos.push(nuevoProducto);
    renderProductos();
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('precio').value = '';
}

const agregarBtn = document.getElementById('btn_agregar');
if (agregarBtn) {
    agregarBtn.addEventListener('click', agregarProducto);
}

let idEditar = null;

function editarProducto(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        document.getElementById('nombre').value = producto.nombre;
        document.getElementById('descripcion').value = producto.descripcion;
        document.getElementById('precio').value = producto.precio;
        idEditar = id;
        agregarBtn.textContent = 'Actualizar Producto';
        agregarBtn.removeEventListener('click', agregarProducto);
        agregarBtn.removeEventListener('click', actualizarProducto);
        agregarBtn.addEventListener('click', actualizarProducto);
    }
}

function actualizarProducto() {
    const nombreInput = document.getElementById('nombre').value.trim();
    const descripcionInput = document.getElementById('descripcion').value.trim();
    const precioInput = document.getElementById('precio').value.trim();
    
    if (!nombreInput || !descripcionInput || !precioInput) {
        alert('Por favor, complete todos los campos');
        return;
    }
    
    const productoIndex = productos.findIndex(p => p.id === idEditar);
    if (productoIndex !== -1) {
        productos[productoIndex] = {
            id: idEditar,
            nombre: nombreInput,
            descripcion: descripcionInput,
            precio: parseFloat(precioInput)
        };

        renderProductos();
        limpiarFormulario();
        agregarBtn.textContent = 'Agregar Producto';
        agregarBtn.removeEventListener('click', actualizarProducto);
        agregarBtn.addEventListener('click', agregarProducto);
        idEditar = null;
    }
}

function cancelarEdicion() {
    limpiarFormulario();
    agregarBtn.textContent = 'Agregar Producto';
    agregarBtn.removeEventListener('click', actualizarProducto);
    agregarBtn.removeEventListener('click', agregarProducto);
    agregarBtn.addEventListener('click', agregarProducto);
    idEditar = null;
}

const cancelarBtn = document.getElementById('btn_cancelar');
if (cancelarBtn) {
    cancelarBtn.addEventListener('click', cancelarEdicion);
}

function eliminarProducto(id) {
    const index = productos.findIndex(p => p.id === id);
    if (index !== -1) {
        if (confirm('¿Estás seguro de eliminar este producto?')) {
            productos.splice(index, 1);
            renderProductos();
        }
    }
}

function actualizarEstadisticas() {
    const totalProductos = productos.length;
    const precioPromedio = totalProductos > 0 ? (productos.reduce((sum, p) => sum + p.precio, 0) / totalProductos).toFixed(2) : 0;
    
    const elTotal = document.getElementById('totalProductos');
    const elPromedio = document.getElementById('precioPromedio');
    const elCaro = document.getElementById('productoMasCaro');
    const elBarato = document.getElementById('productoMasBarato');

    if (elTotal) elTotal.textContent = totalProductos;
    if (elPromedio) elPromedio.textContent = precioPromedio;

    const productoMasCaro = productos.length > 0 ? Math.max(...productos.map(p => p.precio)).toFixed(2) : 0;
    const productoMasBarato = productos.length > 0 ? Math.min(...productos.map(p => p.precio)).toFixed(2) : 0;

    if (elCaro) elCaro.textContent = productoMasCaro;
    if (elBarato) elBarato.textContent = productoMasBarato;
}

window.onload = function() {
    renderProductos();
};