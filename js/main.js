import { hamburguer } from "./hamburguer.js";
import {accordion} from "./accordion.js";


window.addEventListener("DOMContentLoaded", (e) => {
  
    hamburguer(".hamburguer", ".menu");
    accordion('.accordion__title', '.accordion__content');
});