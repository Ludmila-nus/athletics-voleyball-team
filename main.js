import "./sass/style.scss";


// titulo 
let titulo = document.getElementById('title');
let texto = titulo.textContent;
titulo.textContent = ''; 

const tiempoEntreLetras = 100; 
let index = 0;

function mostrarLetra() {
    titulo.textContent += texto[index]; 
    index++;
    if (index < texto.length) {
        setTimeout(mostrarLetra, tiempoEntreLetras);
    }
}

// Llamar a la función para empezar a mostrar las letras
mostrarLetra();

// menu
document.addEventListener('DOMContentLoaded', function(){
    const toggleMenuBtn = document.getElementById('toggleMenu');
    const menu = document.getElementsByClassName('header-principal__nav');

    toggleMenuBtn.addEventListener('click', function(){
        // Alternar la visibilidad del menú cambiando la clase 'visible' con toggle hace lo contario(si la tiene la borra, sino la agrega)
        menu.classList.toggle('visible');
    });

});










