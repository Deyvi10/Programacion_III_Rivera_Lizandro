// dom02-seleccion.js
document.addEventListener("DOMContentLoaded", 
    function(){
        const titulo = document.getElementById("titulo");
        console.log("Título del curso:", titulo);

        const notas = document.getElementsByClassName("nota");
        console.log("Notas de los cursos:", notas);

        const items = document.getElementsByTagName("li");
        console.log("Lista de estudiantes:", items);

        const primerItem = document.querySelector(".item");
        console.log("Primer estudiante:", primerItem);
        
        const todosLosItems = document.querySelectorAll(".item");
        console.log("Todos los estudiantes:", todosLosItems);

        Array.from(todosLosItems).forEach(element => {
            console.log("Estudiante:", element);
        });
    });