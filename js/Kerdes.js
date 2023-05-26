class Kerdes {
    #tipp;

    constructor(szuloElem, kerdes, id){
        this.id = id;
        let txt = `<div class="cont">`
        txt += `<h2>${kerdes}</h2>`
        txt += `<form name = "form">
        Valasz: <input type="text" class = "tipp">
        <input type="submit" value="Submit" class="gomb">
        </form>`;
        txt+= `</div>`
        szuloElem.html(txt);
        $(".btn_next").on("click", ()=>{
            this.trigger_next();
        })
        this.submitElem = $(".gomb");
        this.inputErtek = $(".tipp");

        this.submitElem.on("click", ()=>{
            this.adatokOssze();
            this.triggerSubmit();
            this.triggerNext();
        });


    }
    
    adatokOssze(){
        event.preventDefault();
         this.#tipp =  this.inputErtek.val();
    }

    getTipp(){
        return this.#tipp;
    }
    
    triggerNext(){
        const esemeny = new CustomEvent("next", {detail:this.id})
        window.dispatchEvent(esemeny);
    }

    triggerSubmit(){
        const esemeny = new CustomEvent("submit", {detail:this});
        window.dispatchEvent(esemeny);
    }


}export default Kerdes