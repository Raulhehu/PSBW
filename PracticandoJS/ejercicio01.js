//raulhh

// Creamos los elementos base
const tituloOriginal = document.createElement('h1');
tituloOriginal.textContent = 'Título de la Práctica';

const subtitulo = document.createElement('h2');
subtitulo.textContent = 'Subtítulo generado con JS';

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Este es el primer párrafo creado dinámicamente.';

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Este es el segundo párrafo para cumplir con los requisitos.';

const lista = document.createElement('ul');
for (let i = 1; i <= 5; i++) {
    const item = document.createElement('li');
    item.textContent = `Elemento de lista ${i}`;
    lista.appendChild(item);
}

// Los agregamos al DOM (body)
document.body.append(tituloOriginal, subtitulo, parrafo1, parrafo2, lista);

//todo se a probado y programado en CodePen
