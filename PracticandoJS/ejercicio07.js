//raulhh

const formDiv = document.createElement('div');
formDiv.innerHTML = `
    <h3>Agregar Nueva Tecnología</h3>
    <form id="form-tech">
        <input type="text" id="t-nombre" placeholder="Nombre" />
        <input type="text" id="t-desc" placeholder="Descripción" />
        <input type="text" id="t-tipo" placeholder="Tipo/Categoría" />
        <button type="submit">Agregar tecnología</button>
    </form>
    <p id="form-error" style="color:red;"></p>
`;
document.body.appendChild(formDiv);

document.getElementById('form-tech').addEventListener('submit', (e) => {
    e.preventDefault(); // Evita recarga
    const nombre = document.getElementById('t-nombre').value.trim();
    const desc = document.getElementById('t-desc').value.trim();
    const tipo = document.getElementById('t-tipo').value.trim();
    const errorMsg = document.getElementById('form-error');

    if(!nombre || !desc || !tipo) {
        errorMsg.textContent = 'Todos los campos son obligatorios.';
        return;
    }
    
    errorMsg.textContent = '';
    tecnologiasWeb.push({ nombre, descripcion: desc, tipo });
    renderizarTecnologias(tecnologiasWeb); // Actualiza la lista
    e.target.reset(); // Limpia los inputs
    
    // Disparador para guardar en localstorage (Ejercicio 9)
    if(typeof guardarEnLocal === 'function') guardarEnLocal();
});
