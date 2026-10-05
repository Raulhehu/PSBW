//raulhh


const btnBorrarLocal = document.createElement('button');
btnBorrarLocal.textContent = 'Borrar datos guardados';
document.body.appendChild(btnBorrarLocal);

// Al cargar el script, verificamos si hay algo guardado
function cargarDesdeLocal() {
    const datos = localStorage.getItem('tecnologiasGuardadas');
    if (datos) {
        tecnologiasWeb = JSON.parse(datos); //actualizamos la variable global
        renderizarTecnologias(tecnologiasWeb); //reconstruimos interfaz
    }
}

// funcion global que será llamada al agregar desde form (Ej 7)
window.guardarEnLocal = function() {
    localStorage.setItem('tecnologiasGuardadas', JSON.stringify(tecnologiasWeb));
};

btnBorrarLocal.addEventListener('click', () => {
    localStorage.removeItem('tecnologiasGuardadas');
    alert('Datos borrados. Recarga la página para ver el estado original.');
});

//ejecutamos la recuperación al inicio
cargarDesdeLocal();
