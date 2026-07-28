document.addEventListener("DOMContentLoaded", 
    function(){
        const mensaje = document.getElementById("mensaje");
        mensaje.textContent="Texto Modificado desde el servidor"
        console.log("Mensaje:", mensaje);

        const link = document.getElementById("link");
        link.textContent="www.google.com";
        link.href = "https://www.google.com";
        console.log("Link:", link);

    });