//raulhh 


const panel = document.createElement('div');
panel.innerHTML = `<h3>Panel Interactivo</h3>`;

const btnAccion1 = document.createElement('button');
btnAccion1.textContent = 'Ocultar/Mostrar Parrafos';

const btnAccion2 = document.createElement('button');
btnAccion2.textContent = 'Cambiar Fondo';

const btnAccion3 = document.createElement('button');
btnAccion3.textContent = 'Agrandar Letra';

const cajaHover = document.createElement('div');
cajaHover.textContent = 'Pasa el raton sobre mi';
cajaHover.style.padding = '10px';
cajaHover.style.backgroundColor = 'lightgray';
cajaHover.style.display = 'inline-block';

//ocultar o mostrar parrafos
btnAccion1.addEventListener('click', () => {
    const ps = document.querySelectorAll('p');
    ps.forEach(p => p.classList.toggle('oculto'));
});

//cambiar color de fondo
btnAccion2.addEventListener('click', () => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
});

//Agrandar/Achicar letra y cambiar texto del boton para que se sienta mas coherente, porque senti que el texto se quedara 
//en solo agrandar, no se veria bien, puesto que al quedarse como agrandar letra sentia que si se quedaba asi, al darle lo
//que uno espera es que se vuelva a agrandar, y asi ya tiene mas sentido como boton unico para este caso
btnAccion3.addEventListener('click', () => {
    // Revisamos si la letra ya esta grande
    const estaGrande = document.body.style.fontSize === '20px';
    
    if (estaGrande) {
        document.body.style.fontSize = '16px';
        btnAccion3.textContent = 'Agrandar Letra'; // Regresa al texto original
    } else {
        document.body.style.fontSize = '20px';
        btnAccion3.textContent = 'Achicar Texto'; // Cambia para ser coherente
    }
});

// Eventos diferentes a click
cajaHover.addEventListener('mouseover', () => cajaHover.style.backgroundColor = 'yellow');
cajaHover.addEventListener('mouseout', () => cajaHover.style.backgroundColor = 'lightgray');

panel.append(btnAccion1, btnAccion2, btnAccion3, document.createElement('br'), cajaHover);
document.body.appendChild(panel);
