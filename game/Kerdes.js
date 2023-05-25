import { LISTA } from "../data";

class Kerdes {
    #elem;
    #input;
    #tipp;

    constructor(szuloElem){
        let txt = `<form name = "form">
        Valasz: <input type="text" id = "tipp">
        <input type="submit" value="Submit" id="gomb">
        </form>`;
        szuloElem.append(txt);
        this.submitElem = $("#gomb");
        this.inputErtek = $("#tipp");

        this.submitElem.on("click", ()=>{
            this.adatokOssze();
        });


    }
    
    adatokOssze(){
        event.preventDefault();
         this.#tipp =  this.inputErtek.val();
         console.log(this.#tipp);
    }

    getTipp(){
        return this.#tipp
    }
}export default Kerdes