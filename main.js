import Jatekter from "./js/Jatekter.js";
import About from "./js/About.js";
import Credit from "./js/Credit.js";
import Csatater from "./js/Csatater.js";


$(function(){
    new Csatater();
    $(".button_f").on("click", ()=>{
        new Jatekter();
        new Csatater();
    })
    $(".button_a").on("click", ()=>{
        new About();
    })
    $(".button_c").on("click", ()=>{
        new Credit();
    })
});
