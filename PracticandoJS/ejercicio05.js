//raulhh


const seccionListas = document.createElement('div');
const btnAdd = document.createElement('button');
btnAdd.textContent = 'Agregar elemento';
const btnDel = document.createElement('button');
btnDel.textContent = 'Eliminar último elemento';

const mensajeError = document.createElement('span');
mensajeError.style.color = 'red';

const listaDinamica = document.createElement('ul');
let contadorLista = 1;

btnAdd.addEventListener('click', () => {
    mensajeError.textContent = ''; // Limpiamos mensaje
    const li = document.createElement('li');
    li.textContent = `Elemento dinámico ${contadorLista}`;
    listaDinamica.appendChild(li);
    contadorLista++;
});

btnDel.addEventListener('click', () => {
    if (listaDinamica.lastElementChild) {
        listaDinamica.removeChild(listaDinamica.lastElementChild);
        contadorLista--; // Ajustamos el contador para ser coherentes
        mensajeError.textContent = '';
    } else {
        mensajeError.textContent = ' La lista ya está vacía.';
    }
});

seccionListas.append(btnAdd, btnDel, mensajeError, listaDinamica);
document.body.appendChild(seccionListas);
