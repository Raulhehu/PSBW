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

// funcion para renderizar tecnologias (util para reutilizar mas adelante)
function renderizarTecnologias(tecs) {
    contenedorTechs.innerHTML = ''; // limpiamos contenedor como explico la porfa en clase para que se limpie
    tecs.forEach(tech => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tech-card'); // clase con bordes y margin en CSS
        tarjeta.innerHTML = `
            <strong>${tech.nombre}</strong> (${tech.tipo})
            <p>${tech.descripcion}</p>
        `;
        contenedorTechs.appendChild(tarjeta);
    });
}

renderizarTecnologias(tecnologiasWeb);
document.body.appendChild(contenedorTechs);
