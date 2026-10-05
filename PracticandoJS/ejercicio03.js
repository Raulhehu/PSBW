//raulhh


// Declaramos la variable principal (la haremos let para poder sobreescribirla en el Ejercicio 9)
let tecnologiasWeb = [
    { nombre: 'HTML', descripcion: 'Lenguaje de marcado de hipertexto', tipo: 'Frontend' },
    { nombre: 'CSS', descripcion: 'Hojas de estilo en cascada', tipo: 'Frontend' },
    { nombre: 'JavaScript', descripcion: 'Lenguaje de programación web', tipo: 'Frontend/Backend' },
    { nombre: 'PHP', descripcion: 'Lenguaje de lado del servidor', tipo: 'Backend' },
    { nombre: 'MySQL', descripcion: 'Gestor de bases de datos', tipo: 'Base de Datos' }
];

const contenedorTechs = document.createElement('div');
contenedorTechs.id = 'contenedor-tecnologias';

// Función para renderizar tecnologias (util para reutilizar mas adelante)
function renderizarTecnologias(tecs) {
    contenedorTechs.innerHTML = ''; // Limpiamos contenedor como explico la porfa en clase para que se limpie
    tecs.forEach(tech => {
        const tarjeta = document.createElement('div');
        
        // aplicamos bordes y espacios por javascript 
        // (correccion!!) (tambien solo copiamos y pegamos lo que teniamos en el index y se pego aqui)
        tarjeta.style.border = '1px solid #333';
        tarjeta.style.margin = '10px 0';
        tarjeta.style.padding = '10px';
        tarjeta.style.borderRadius = '5px';
        
        tarjeta.innerHTML = `
            <strong>${tech.nombre}</strong> (${tech.tipo})
            <p>${tech.descripcion}</p>
        `;
        contenedorTechs.appendChild(tarjeta);
    });
}

renderizarTecnologias(tecnologiasWeb);
document.body.appendChild(contenedorTechs);
