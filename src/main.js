//Efecto escritura a máquina título
var typed = new Typed('.typed', {
	strings: [
		'<i class="palabras">vivir</i>',
		'<i class="palabras">disfrutar</i>',
		'<i class="palabras">experimentar</i>',
		'<i class="palabras">conocerte</i>',
		'<i class="palabras">abrirte</i>',
		'<i class="palabras">cuidarte</i>'
	],

	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: true, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '!', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

// Función para cambiar entre vistas (SPA)
function navigateTo(pageId) {
	// Ocultar todas las páginas
	const pages = document.querySelectorAll('#contenido > div');
	pages.forEach(page => page.classList.add('d-none'));

	// Mostrar la página seleccionada
	const selectedPage = document.getElementById(pageId);
	selectedPage.classList.remove('d-none');
  }

// Asignar eventos de clic a los elementos del menú
document.getElementById('menuHome').addEventListener('click', function (e) {
    e.preventDefault();
    navigateTo('carrusel');
});

document.getElementById('menuItinerarios').addEventListener('click', function (e) {
    e.preventDefault();
    navigateTo('itinerarios');
});

document.getElementById('menuQuienesSomos').addEventListener('click', function (e) {
    e.preventDefault();
    navigateTo('quienesSomos');
});
