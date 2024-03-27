import "./sass/style.scss";



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











