const listaRepuestos = document.getElementById('lista-repuestos');
const seleccionado = document.getElementById('seleccionado');

listaRepuestos.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const items = listaRepuestos.querySelectorAll('li');
        items.forEach(item => item.style.backgroundColor = '');
        e.target.style.backgroundColor = 'lightblue';
        seleccionado.textContent = `Repuesto seleccionado: ${e.target.textContent}`;
    }
});

console.log("Taller Mecánico: Selección de repuestos lista");