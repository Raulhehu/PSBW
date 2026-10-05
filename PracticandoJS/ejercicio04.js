//raulhh 


const btnReorganizar = document.createElement('button');
btnReorganizar.textContent = 'Reorganizar página';

const btnRestaurar = document.createElement('button');
btnRestaurar.textContent = 'Restaurar orden';

document.body.append(btnReorganizar, btnRestaurar);

// Guardamos referencias a los contenedores
const contenedorBody = document.body;
const elemH1 = document.querySelector('h1');
const elemH2 = document.querySelector('h2');
const elemLista = document.querySelector('ul');
const elemTechs = document.getElementById('contenedor-tecnologias');

btnReorganizar.addEventListener('click', () => {
    // Movemos los elementos al final del body en un orden diferente
    contenedorBody.appendChild(elemTechs);
    contenedorBody.appendChild(elemH1);
    contenedorBody.appendChild(elemLista);
    contenedorBody.appendChild(elemH2);
});

btnRestaurar.addEventListener('click', () => {
    // Restauramos el orden original insertandolos al inicio
    contenedorBody.prepend(elemTechs); // Lo mandamos al final de su orden original
    contenedorBody.prepend(elemLista);
    contenedorBody.prepend(elemH2);
    contenedorBody.prepend(elemH1); 
});
