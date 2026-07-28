// dom03-modificaciones.js
document.addEventListener("DOMContentLoaded", 
    function(){
        const titulo = document.getElementById("titulo");
        titulo.textContent = "Modificación de Cursos Online en el DOM";
        console.log("Título:", titulo);

        const link = document.getElementById("link");
        link.textContent = "Ver temario completo del curso";
        link.href = "https://www.google.com";
        console.log("Link:", link);

        const boton = document.getElementById("boton");
        boton.textContent = "Inscribirse Ahora";
    });