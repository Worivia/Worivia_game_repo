import Kerdes from "../js/Kerdes.js";
import { LISTA } from "../data.js";

class Jatekter {

    constructor() {
        const ART = $("article");
        let id = 0;
        this.pont = 0;
        this.lista = LISTA;

        new Kerdes(ART, this.lista[id].kerdes, id);
        $(window).on("next", (event) => {
            id++;
            new Kerdes(ART, this.lista[id].kerdes, id);
            
        })

        $(window).on("submit", (event) => {
            console.log(event.detail)
            if (event.detail.getTipp() == this.lista[id].valasz) {
                this.pont++;
            }
            console.log(this.pont);
        })

    }


    pontNoveles() {

    }

} 

export default Jatekter;