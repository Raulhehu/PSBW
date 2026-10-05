# PracticandoJS
Programación de Sistemas Basados en Web (PSBW) -- Tarrea escolar para practicar la programacion en JavaScript :)

### Ejercicio 1
1. **¿Que hace este ejercicio?** Crea elementos de HTML desde cero (titulos, parrafos y una lista) usando solo JavaScript y los inyecta en la pagina.
2. **¿Que conceptos de JavaScript utilizaste?** DOM, document.createElement, textContent, appendChild y ciclos for.
3. **¿Ya conocias estos conceptos?** Conocia los ciclos, pero crear elementos del DOM desde cero fue nuevo para mi.
4. **¿Tuviste dificultades?** Al principio no me aparecian los elementos en la pantalla.
5. **¿Utilizaste Inteligencia Artificial?** Si. Le pregunte a la IA por que no se veian mis elementos y me explico que me faltaba usar appendChild para inyectarlos fisicamente en el body.

### Ejercicio 2
1. **¿Que hace este ejercicio?** Selecciona elementos que ya existen en el HTML original y les cambia el texto, id y los estilos visuales.
2. **¿Que conceptos de JavaScript utilizaste?** querySelector, querySelectorAll, forEach, classList.add, y manipulacion de style.
3. **¿Ya conocias estos conceptos?** Ya habia usado forEach, pero querySelectorAll fue algo nuevo.
4. **¿Tuviste dificultades?** Tuve problemas para aplicarle la clase a todos los parrafos al mismo tiempo.
5. **¿Utilizaste Inteligencia Artificial?** Si. Le pregunte como afectaba a varios elementos a la vez y me sugirio usar querySelectorAll junto con un forEach (igual recorde que en clase lo menciono la profesora) para iterar la lista de nodos.

### Ejercicio 3
1. **¿Que hace este ejercicio?** Crea un arreglo de objetos de tecnologias web y genera tarjetas dinamicamente para cada una.
2. **¿Que conceptos de JavaScript utilizaste?** Arreglos, objetos, innerHTML, forEach, creacion de elementos y estilos desde JS.
3. **¿Ya conocias estos conceptos?** Ya manejaba arreglos y objetos, pero integrarlos con creacion de HTML fue interesante.
4. **¿Tuviste dificultades?** Acomodar el string literal con las variables dentro del innerHTML fue un poco confuso al inicio.
5. **¿Utilizaste Inteligencia Artificial?** Si. Le pedi un ejemplo de como meter variables de un objeto dentro de etiquetas de HTML usando template strings (las comillas invertidas) para no perderme concatenando.

### Ejercicio 4
1. **¿Que hace este ejercicio?** Mueve elementos que ya estan en la pagina de un lugar a otro usando botones, sin tener que volver a crearlos.
2. **¿Que conceptos de JavaScript utilizaste?** Eventos click, appendChild, prepend, referencias a nodos.
3. **¿Ya conocias estos conceptos?** La mayoria si, pero no sabia que usar appendChild sobre un elemento que ya existe lo movia de lugar.
4. **¿Tuviste dificultades?** Me costo entender como regresarlos a su lugar original.
5. **¿Utilizaste Inteligencia Artificial?** Si. Le pregunte si tenia que eliminar los nodos primero para moverlos, y me explico que no era necesario, que appendChild y prepend los mueven en automatico.

### Ejercicio 5
1. **¿Que hace este ejercicio?** Agrega y elimina elementos de una lista dinamicamente y muestra un error si intentas borrar cuando la lista ya esta vacia.
2. **¿Que conceptos de JavaScript utilizaste?** Eventos, removeChild, lastElementChild, condicionales if/else.
3. **¿Ya conocias estos conceptos?** Las condicionales si, pero lastElementChild fue nuevo.
4. **¿Tuviste dificultades?** El numero de la lista se desincronizaba al borrar y agregar elementos. 
5. **¿Utilizaste Inteligencia Artificial?** Si. Le consulte cual era la forma mas limpia de saber si una lista estaba vacia antes de intentar borrar, y me recomendo validar lastElementChild.

### Ejercicio 6
1. **¿Que hace este ejercicio?** Es un panel con botones que cambian colores, tamaños y visibilidad. Ademas tiene un cuadro que reacciona con el mouse.
2. **¿Que conceptos de JavaScript utilizaste?** condicionales, manipulacion del style y eventos mouseover y mouseout.
3. **¿Ya conocias estos conceptos?** Conocia el click, pero mouseover y mouseout fueron nuevos.
4. **¿Tuviste dificultades?** Queria que el boton que agranda la letra tambien cambiara su propio texto para decir "Achicar texto" y fuera coherente.
5. **¿Utilizaste Inteligencia Artificial?** Si. Le pregunte como validar el tamaño actual de la fuente del body para usar un if/else y me ayudo a estructurar esa logica.

### Ejercicio 7
1. **¿Que hace este ejercicio?** Un formulario para agregar nuevas tecnologias a la lista sin recargar la pagina.
2. **¿Que conceptos de JavaScript utilizaste?** Formularios, preventDefault, capturar value de inputs, push a arreglos.
3. **¿Ya conocias estos conceptos?** Ya conocia los formularios pero no como evitar la recarga.
4. **¿Tuviste dificultades?** La pagina se recargaba sola al darle al boton de submit y me borraba todo lo que habia hecho.
5. **¿Utilizaste Inteligencia Artificial?** Si. Le pregunte por que se recargaba sola la pagina y me explico el comportamiento por defecto de los formularios y como detenerlo con e.preventDefault().

### Ejercicio 8
1. **¿Que hace este ejercicio?** Es un buscador que filtra las tecnologias en tiempo real mientras vas escribiendo.
2. **¿Que conceptos de JavaScript utilizaste?** Evento input, filter, includes, toLowerCase.
3. **¿Ya conocias estos conceptos?** Conocia toLowerCase, pero los metodos de arreglos los tuve que repasar.
4. **¿Tuviste dificultades?** Hacer que la busqueda no fuera sensible a mayusculas o minusculas.
5. **¿Utilizaste Inteligencia Artificial?** Si. Le pedi que me orientara sobre cual era la mejor manera de filtrar un arreglo buscando coincidencias parciales de texto y me sugirio usar filter junto con includes.

### Ejercicio 9
1. **¿Que hace este ejercicio?** Guarda las tecnologias en la memoria del navegador para que no se borren cuando recargas la pagina.
2. **¿Que conceptos de JavaScript utilizaste?** localStorage, setItem, getItem, JSON.stringify, JSON.parse.
3. **¿Ya conocias estos conceptos?** Todo esto de localStorage fue totalmente nuevo para mi.
4. **¿Tuviste dificultades?** Al guardar el arreglo y revisarlo en la consola de Chrome me salia [object Object] en lugar de mis datos.
5. **¿Utilizaste Inteligencia Artificial?** Si. Le pregunte por que decia object en lugar de mostrar mi arreglo y me enseño que localStorage solo guarda texto, por lo que tenia que usar JSON.stringify.

### Ejercicio 10
1. **¿Que hace este ejercicio?** Busca usuarios en GitHub conectandose a su API y muestra su foto, seguidores y repositorios, creando cada elemento desde JS.
2. **¿Que conceptos de JavaScript utilizaste?** fetch, async/await, try/catch, promesas, JSON, y creacion de elementos DOM.
3. **¿Ya conocias estos conceptos?** No, nunca habia consumido una API antes.
4. **¿Tuviste dificultades?** Si, la verdad este fue el inciso mas tedioso y confuso de todos por la cantidad de validaciones y pasos asincronos.
5. **¿Utilizaste Inteligencia Artificial?** Si. Aqui si utilice un poco mas la IA porque el flujo de datos era complejo. Le pedi que me ayudara a estructurar el bloque de try/catch para manejar los errores correctamente y me asesore sobre como desarmar el JSON de respuesta para ir creando las etiquetas (h3, img, p) nodo por nodo para cumplir con la instruccion de no inyectar HTML directo.

**Preguntas adicionales para el ejercicio 10:**

6. **¿Que entiendes por AJAX?** 
Es una tecnologia que nos permite comunicarnos con un servidor en segundo plano para pedir o enviar datos, y actualizar la pagina web sin tener que recargarla por completo.

7. **¿Por que la pagina no necesita recargarse para obtener nueva informacion?** 
Porque usamos JavaScript para atrapar el evento, hacer la peticion de red por detras y, cuando llegan los datos, modificamos solo esa parte especifica del DOM.

8. **¿Que hace fetch()?** 
Es una funcion nativa que nos permite realizar peticiones HTTP (como GET o POST) para comunicarnos con servidores externos o APIs, devolviendo una promesa con la respuesta.

9. **¿Que representa la respuesta obtenida del servidor?** 
Es el paquete de datos que nos regresa la API. En este caso trae informacion util como estado (200 si fue exitoso, 404 si no existe) y el cuerpo del mensaje que viene en formato JSON.

10. **¿Que es JSON y para que se utilizo?** 
Es un formato de texto ligero y facil de leer que sirve para intercambiar datos. Lo utilizamos para transformar la respuesta que nos dio GitHub en un objeto de JavaScript y asi poder acceder a propiedades como data.name o data.followers.

11. **¿Que hace event.preventDefault() en el formulario?** 
Evita el comportamiento por defecto del navegador de enviar el formulario a una nueva URL y refrescar la pestaña, permitiendonos controlar el envio manualmente con JS.

12. **¿Que diferencia existe entre un error en la peticion y buscar un usuario que no existe?** 
Buscar un usuario que no existe es una respuesta valida del servidor (el servidor te escucho y te dice "error 404 no lo encontre"). Un error en la peticion (el catch) pasa cuando ni siquiera puedes llegar al servidor, por ejemplo si se te cae el internet.

13. **Describe, paso a paso, el recorrido de los datos desde que el usuario presiona "Buscar usuario" hasta que la informacion aparece en pantalla.** 
Primero JS captura el click y frena la recarga. Toma el valor del input y hace un fetch a la URL de GitHub. Se espera la respuesta y si es exitosa, se convierte a JSON. Con ese JSON, extraemos los datos que nos interesan y vamos creando una por una las etiquetas HTML (img, p, a). Finalmente, hacemos un appendChild de todos esos elementos en el div vacio de los resultados.

---

**Nota final sobre la revision general del proyecto:**

Al ultimo momento me surgio la duda de saber si todo estaba en orden para entregar, asi que decidi mandarle todo el codigo a la IA para saber si estaba bien todo de acuerdo a las rubricas. Me contesto que si, que era un maravilloso trabajo, pero que existia un problema con las solicitudes de la actividad con relacion a las instrucciones. Resulta que yo habia puesto los bordes y los espacios del ejercicio 3 directo en una etiqueta style dentro del index.html, y la IA me recordo que la instruccion decia estrictamente que debia ser generado todo por JavaScript. Gracias a esa ultima consulta pude corregir los estilos pasandolos al ejercicio03.js, asegurando que todo cumpliera al pie de la letra con el PDF de rubrica que nos proporciono la maestra.
