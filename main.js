import "./sass/style.scss";
import swiper from "./swiper";


// ------- Title ----------
document.addEventListener('DOMContentLoaded', function () {
    let titulo = document.getElementById('title');
    let texto = titulo.textContent;
    titulo.textContent = '';

    // The letters appear one by one
    const tiempoEntreLetras = 100;
    let index = 0;

    function mostrarLetra() {
        titulo.textContent += texto[index];
        index++;
        if (index < texto.length) {
            setTimeout(mostrarLetra, tiempoEntreLetras);
        }
    }

    // Call the function to start displaying the letters
    mostrarLetra();

    // ------- Login----------

    let modal = document.getElementById('loginModal');
    let loginButton = document.getElementById('loginButton');
    let closeButton = document.getElementsByClassName('close')[0];

    // Add a click event to the login button to open the modal
    loginButton.addEventListener('click', function () {
        modal.style.display = 'block';
    })

    // When the user clicks on <span> (x), close the modal
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // When the user clicks anywhere outside the modal, close it
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });


    //------- menu------------

    const toggleMenuBtn = document.getElementById('toggleMenu');
    const menu = document.getElementById('menu');

    toggleMenuBtn.addEventListener('click', function () {
        // Toggle menu visibility by changing the 'visible' class
        menu.classList.toggle('active');
    });

});










