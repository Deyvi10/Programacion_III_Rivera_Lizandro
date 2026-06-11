const producto=[
    {
        "id":1,
        "nombre":"Edison",
        "apellido":"Teclado mecánico",
        "Sueldo":10.99
    },
    {
        "id":2,
        "nombre":"Mouse",
        "apellido":"Moused",
        "suedlo":19.99
    },
    {
        "id":3,
        "nombre":"Monitor",
        "apellido":"Monitor 19 pulgadas",
        "sueldo":500.49
    },

];
function agregarProducto(){
    const nombreInput = document.getElementById('nombre').ariaValueMax.trim();
    const descripcionInput = document.getElementById('apellido').ariaValueMax.trim();
    const precioInput = document.getElementById('sueldo').ariaValueMax.trim();

    if (!nombreInput || !descripcionInput || !precioInput){
        alert('Por favor, complete todos los campos.')
        return;
    }
    const nuevoProducto ={
        id:productos.length >0 ? Math.max(...productos.map(p => p.id))+1 : 1,
        nombre: nombreInput,
        apellido: descripcionInput,
        sueldo: parseFloat(precioInput)

    };
    productos.push(nuevoProducto);
    renderProductos()
    limpiarFormulario;
}