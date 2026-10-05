//raulhh

// Seleccionamos el título
const h1Modificar = document.querySelector('h1');
h1Modificar.textContent = 'Título Modificado por el Ejercicio 2';
h1Modificar.id = 'titulo-principal';

// Modificamos 3 propiedades visuales del título
h1Modificar.style.color = 'blue';
//h1Modificar.style.color = "#ff5733";
h1Modificar.style.textAlign = 'center';
h1Modificar.style.textTransform = 'uppercase';

// Seleccionamos los parrafos y les agregamos una clase
const todosParrafos = document.querySelectorAll('p');
todosParrafos.forEach(p => {
    p.classList.add('texto-estilizado');
});
