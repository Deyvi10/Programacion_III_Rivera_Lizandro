const base = document.getElementById('base');
const altura = document.getElementById('altura');
const btnCalcular = document.getElementById('btn_calculo_area');
const resultado = document.getElementById('resultado');

btnCalcular.addEventListener('click', () => {
    const baseNumerico = parseFloat(base.value);
    const alturaNumerico = parseFloat(altura.value);
    const area = baseNumerico * alturaNumerico / 2;
    resultado.textContent = `Área del espacio: ${area.toFixed(2)} m²`;
});

console.log("Taller Mecánico: Cálculo de área listo");