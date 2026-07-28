
function mostrarAlerta() {
    alert('!Hola desde el boton¡');
}

function agregarProducto() {
    const lista = document.getElementById('lista-productos1')
    const nuevoProducto = document.createElement('li')
    nuevoProducto.textContent = 'Nuevo Producto';
    lista.appendChild(nuevoProducto);
}

document.getElementById('btn3').addEventListener('click', () => {
    const lista2 = document.getElementById('lista-productos2')
    const nuevoProducto = document.createElement('li')
    nuevoProducto.textContent = 'Nuevo Producto desde evento listener';
    lista2.appendChild(nuevoProducto);
});