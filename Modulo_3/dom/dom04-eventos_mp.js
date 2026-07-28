const campoPlaca = document.getElementById('campo-placa');
const btnRegistrar = document.getElementById('btn-registrar');
const mensaje = document.getElementById('mensaje');
const historial = document.getElementById('historial');

btnRegistrar.addEventListener('click', () => {
    const placa = campoPlaca.value.trim();
    if (placa !== '') {
        const li = document.createElement('li');
        li.textContent = `Vehículo ${placa} registrado - ${new Date().toLocaleTimeString()}`;
        historial.appendChild(li);
        mensaje.textContent = `Vehículo ${placa} registrado exitosamente`;
        campoPlaca.value = '';
    } else {
        mensaje.textContent = 'Por favor ingrese una placa válida';
    }
});

campoPlaca.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btnRegistrar.click();
    }
});

console.log("Taller Mecánico: Eventos de taller listos");