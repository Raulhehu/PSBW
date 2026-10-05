//raulhh


const buscadorDiv = document.createElement('div');
buscadorDiv.innerHTML = `
    <h3>Buscar tecnología</h3>
    <input type="text" id="input-buscar" placeholder="Escribe para buscar..." />
`;
// Insertamos el buscador justo antes del contenedor de tarjetas
document.body.insertBefore(buscadorDiv, document.getElementById('contenedor-tecnologias'));

document.getElementById('input-buscar').addEventListener('input', (e) => {
    const termino = e.target.value.toLowerCase();
    const filtradas = tecnologiasWeb.filter(t => t.nombre.toLowerCase().includes(termino));
    renderizarTecnologias(filtradas);
});

//siento que este podria incluso ir mucho mas de la mano con el 07, o sea en el mismo archivo 
