import Jatekter from "./js/Jatekter.js";
import About from "./js/About.js";
import Credit from "./js/Credit.js";


$(function(){
    $(".button_f").on("click", ()=>{
        new Jatekter();
    })
    $(".button_a").on("click", ()=>{
        new About();
    })
    $(".button_c").on("click", ()=>{
        new Credit();
    })
});
