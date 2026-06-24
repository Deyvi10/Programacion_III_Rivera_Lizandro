const baseMayor = document.getElementById('base_mayor');
const baseMenor = document.getElementById('base_menor');
const altura = document.getElementById('altura');
const btnCalcular = document.getElementById('btn_calculo_area'); 
const resultado = document.getElementById('resultado');
const error = document.getElementById('error'); 

btnCalcular.addEventListener('click', () => {
    error.textContent = '';
    resultado.textContent = '';

    const baseMayorNumerico = parseFloat(baseMayor.value);
    const baseMenorNumerico = parseFloat(baseMenor.value);
    const alturaNumerico = parseFloat(altura.value);

    if (isNaN(baseMayorNumerico) || isNaN(baseMenorNumerico) || isNaN(alturaNumerico)) {    
        error.textContent = 'Por favor, ingrese valores numéricos válidos.';
        return;
    }

    if (baseMayorNumerico <= 0 || baseMenorNumerico <= 0 || alturaNumerico <= 0) {
        error.textContent = 'Por favor, ingrese valores mayores a cero.';
        return;
    }   
        
    const area = (baseMayorNumerico + baseMenorNumerico) * alturaNumerico / 2;
    resultado.textContent = `Resultado: ${area}`;
});