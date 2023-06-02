class Csatater{
    constructor(){
        const CST = $(".csatater");
        $(".button_f").on("click", ()=>{
            let txt = `<div class="bg">`
                txt += `<div class="mc"></div>`
                txt += `<div class="enemy"></div>`
                txt += `</div>`
            CST.html(txt);
        });
    }
}

export default Csatater;