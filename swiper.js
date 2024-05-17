// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./sass/style.scss";

// Initialize Swiper 
var swiper = new Swiper(
    ".mySwiper", // selector del elemento que tiene mi carrucel
    {
        // numbers in botton
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
        },
        //after and before
        navigation: {
            nextEl: ".swiper-button-next", 
            prevEl: ".swiper-button-prev", 
        },
        // configure Swiper to use modules
        modules: [Navigation, Pagination]
    });

export default swiper;    