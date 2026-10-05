//raulhh


// parte 1: crear el formulario y sus elementos con createelement
const contenedorGithub = document.createElement('div');

const tituloGithub = document.createElement('h2');
tituloGithub.textContent = 'Buscador de GitHub (AJAX)';

const formGithub = document.createElement('form');
formGithub.id = 'form-github';

const inputUser = document.createElement('input');
inputUser.type = 'text';
inputUser.id = 'gh-user';
inputUser.placeholder = 'Usuario GitHub';

const btnBuscar = document.createElement('button');
btnBuscar.type = 'submit';
btnBuscar.textContent = 'Buscar usuario';

const divResultados = document.createElement('div');
divResultados.id = 'gh-resultados';
divResultados.style.marginTop = '15px';
divResultados.style.padding = '10px';
divResultados.style.border = '1px solid #000';

formGithub.append(inputUser, btnBuscar);
contenedorGithub.append(tituloGithub, formGithub, divResultados);
document.body.appendChild(contenedorGithub);

// partes 2, 3, 4 y 5: capturar envio, ajax, procesamiento y errores
formGithub.addEventListener('submit', async (e) => {
    e.preventDefault(); // evita que la pagina se recargue
    
    const username = inputUser.value.trim();
    divResultados.innerHTML = ''; // limpiamos la busqueda anterior
    
    // manejo de errores 1: el usuario dejo el formulario vacio
    if (!username) {
        const msjError = document.createElement('span');
        msjError.style.color = 'red';
        msjError.textContent = 'El campo de usuario no puede estar vacío.';
        divResultados.appendChild(msjError);
        return;
    }

    // mensaje temporal mientras carga
    const msjCargando = document.createElement('span');
    msjCargando.textContent = 'Buscando...';
    divResultados.appendChild(msjCargando);

    try {
        const respuesta = await fetch(`https://api.github.com/users/${username}`);
        
        divResultados.innerHTML = ''; // quitamos el mensaje de "buscando..."

        // manejo de errores 2: el usuario no existe o la respuesta no es correcta
        if (!respuesta.ok) {
            const msjErrorApi = document.createElement('span');
            if (respuesta.status === 404) {
                msjErrorApi.style.color = 'orange';
                msjErrorApi.textContent = 'El usuario no existe en GitHub.';
            } else {
                msjErrorApi.style.color = 'red';
                msjErrorApi.textContent = `Error al comunicarse con el servidor: ${respuesta.status}`;
            }
            divResultados.appendChild(msjErrorApi);
            return;
        }

        const data = await respuesta.json(); // convertimos la respuesta a json

        // parte 4: generar los elementos de presentacion nodo por nodo
        const tituloNombre = document.createElement('h3');
        const nombreReal = data.name ? data.name : 'Sin nombre real';
        tituloNombre.textContent = `${nombreReal} (${data.login})`;

        const imagenAvatar = document.createElement('img');
        imagenAvatar.src = data.avatar_url;
        imagenAvatar.alt = 'Avatar del usuario';
        imagenAvatar.width = 100;

        const pRepos = document.createElement('p');
        pRepos.innerHTML = `<strong>Repositorios públicos:</strong> ${data.public_repos}`;

        const pSeguidores = document.createElement('p');
        pSeguidores.innerHTML = `<strong>Seguidores:</strong> ${data.followers}`;

        const pSiguiendo = document.createElement('p');
        pSiguiendo.innerHTML = `<strong>Siguiendo:</strong> ${data.following}`;

        const pEnlace = document.createElement('p');
        const enlacePerfil = document.createElement('a');
        enlacePerfil.href = data.html_url;
        enlacePerfil.target = '_blank';
        enlacePerfil.textContent = 'Ver perfil en GitHub';
        pEnlace.appendChild(enlacePerfil);

        // inyectamos todo en la seccion vacia
        divResultados.append(tituloNombre, imagenAvatar, pRepos, pSeguidores, pSiguiendo, pEnlace);

    } catch (error) {
        // manejo de errores 3: existe algun problema al realizar la peticion (red)
        divResultados.innerHTML = '';
        const msjErrorRed = document.createElement('span');
        msjErrorRed.style.color = 'red';
        msjErrorRed.textContent = 'Ocurrió un error al realizar la petición. Revisa tu conexión a internet.';
        divResultados.appendChild(msjErrorRed);
    }
});



//fue divertido hacerlo, aunque el que me llevo mas tiempo, al rededor de unas 2 horas en crearlo
