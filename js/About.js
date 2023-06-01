class About {
    constructor() {
      const ART = $("article");
      let txt = `<div class="cont">`;
      txt += `<h2>About the game:</h2>`;
      txt += `<p>Worivia egy quiz fajta jatek amit és (Végi Dániel Márk) és az osztálytársam (Szlanka Péter) találtunk ki. Egy iskolai projekt amit egyutt fejlesztettünk és csináltunk. A játékban kérdések lesznek feltéve amire jo válasszal kell válaszolni egyértelmüen. Ha jo a válasz akkor az ellenség sebződik, forditva pedig a játékos sebződik.</p>`;
      txt += `<button class = "btn_back">Back</button>`;
      txt += `</div>`;
      ART.html(txt);
      $(".btn_back").on("click", () => {
        this.triggerBack(ART);
      });
    }
  
    triggerBack(szuloElem) {
      let index = `<div class="cim">`;
      index += `<h3>Worivia</h3>`;
      index += `<h1>by Peti & Dani</h1>`;
      index += `</div>`;
      index += `<div class="buttons">`;
      index += `<div><button class="button_f">Fight</button></div>`;
      index += `<div><button class="button_a">About</button></div>`;
      index += `<div><button class="button_c">Credits</button></div>`;
      index += `</div>`;
      szuloElem.html(index);
    }
  }
  
  export default About; 