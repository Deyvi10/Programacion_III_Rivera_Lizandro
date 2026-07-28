
const base= document.getElementById('base');
const altura= document.getElementById('altura');
const btnCalcular = document.getElementById('btn_calculo-area');
const resultado = document.getElementById('resultado');


btnCalcular.addEventListener('click', () => {
    const baseNumerico = parseFloat(base.value);
    const alturaNumerico =  parseFloat(altura.value);
    const area = baseNumerico * alturaNumerico / 2;
    resultado.textContent = `Resultado: ${area}`;
    
})



