// dom11_mp.js
const base = document.getElementById('base');
const altura = document.getElementById('altura');
const btnCalcular = document.getElementById('btn_calculo_area');
const resultado = document.getElementById('resultado');

btnCalcular.addEventListener('click', () => {
    const baseNumerico = parseFloat(base.value) || 0;
    const alturaNumerico = parseFloat(altura.value) || 0;
    const area = (baseNumerico * alturaNumerico) / 2;
    resultado.textContent = `Área calculada: ${area}`;
});