// Selección de elementos del DOM
const botones = document.querySelectorAll('.botones a');
const toggleThemeButton = document.createElement('button');

// Función para mostrar un mensaje cuando se hace clic en un enlace
botones.forEach(boton => {
    boton.addEventListener('click', function(event) {
        alert(`Abriendo ${boton.textContent}`);
    });
});

// Función para alternar entre tema oscuro y claro
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Crear y agregar el botón para cambiar de tema
toggleThemeButton.textContent = 'Cambiar Tema';
toggleThemeButton.classList.add('theme-button');
document.body.appendChild(toggleThemeButton);

// Evento para alternar el tema cuando se hace clic en el botón
toggleThemeButton.addEventListener('click', toggleTheme);

// Establecer el tema inicial según la preferencia del usuario
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-theme');
}
