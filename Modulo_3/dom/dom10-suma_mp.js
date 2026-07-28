const campoCosto1 = document.getElementById('campo_costo1');
const campoCosto2 = document.getElementById('campo_costo2');
const btnSumar = document.getElementById('btn_sumar');
const resultado = document.getElementById('resultado');

btnSumar.addEventListener('click', () => {
    const costo1 = parseFloat(campoCosto1.value);
    const costo2 = parseFloat(campoCosto2.value);
    const total = costo1 + costo2;
    resultado.textContent = `Total a pagar: $${total.toFixed(2)}`;
});

console.log("Taller Mecánico: Suma de costos lista");