const productos=[
    {
        "id":1,
        "nombre":"teclado",
        "descripcion":"Teclado mecánico",
        "precio":10.99
    },
    {
        "id":2,
        "nombre":"Mouse",
        "descripcion":"Mouse",
        "precio":19.99
    },
    {
        "id":3,
        "nombre":"Monitor",
        "descripcion":"Monitor 19 pulgadas",
        "precio":500.49
    },

];

function renderProductos(){
    const cuerpoTabla = document.getElementById('cuerpoTabla');

    cuerpoTabla.innerHTML = '';
    productos.forEach(producto => {
        const productoElement = document.createElement('tr');
        productoElement.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precio.toFixed(2)}</td>
            <td>
                <button onelick="editarPRoducto(${producto.id})
        `;
        cuerpoTabla.appendChild(productoElement);
    });
}

window.onload=function(){
    renderProductos();
};

function agregarProducto(){
    const nombreInput = document.getElementById('nombre').ariaValueMax.trim();
    const descripcionInput = document.getElementById('descripcion').ariaValueMax.trim();
    const precioInput = document.getElementById('precio').ariaValueMax.trim();

    if (!nombreInput || !descripcionInput || !precioInput){
        alert('Por favor, complete todos los campos.')
        return;
    }
    const nuevoProducto ={
        id:productos.length >0 ? Math.max(...productos.map(p => p.id))+1 : 1,
        nombre: nombreInput,
        descripcion: descripcionInput,
        precio: parseFloat(precioInput)

    };
    productos.push(nuevoProducto);
    renderProductos()
    limpiarFormulario;
}
function limpiarFormulario(){
    document.getElementById('nombre').value='';
    document.getElementById('descripcion').value='';
    document.getElementById('precio').value='';

}


const agregarBtn = document.getElementById('btn_agregar');
agregarBtn.addEventListener('click',agregarProducto);
let idEditar = null;
function


function
window.onload=function(){
    renderProductos();
}