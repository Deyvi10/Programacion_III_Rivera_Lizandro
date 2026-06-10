const campoBase = document.getElementById('campo_base');
const campoAltura = document.getElementById('campo_altura');
const btnCalcular = document.getElementById('btn_calcular');
const resultado = document.getElementById('resultado');

btnCalcular.addEventListener('click', () => {
    const base = parseFloat(campoBase.value);
    const altura = parseFloat(campoAltura.value);
    

    const area = (base * altura) / 2;
    
    resultado.textContent = `Área: ${area}`;
});