class About {
    constructor() {
      const FT = $(".feltolt");
      let txt = `<div class="accont">`;
      txt += `<h2>About the game:</h2>`;
      txt += `<p>Worivia egy quiz fajta jatek amit és (Végi Dániel Márk) és az osztálytársam (Szlanka Péter) találtunk ki. Egy iskolai projekt amit egyutt fejlesztettünk és csináltunk. A játékban kérdések lesznek feltéve amire jo válasszal kell válaszolni egyértelmüen. Ha jo a válasz akkor az ellenség sebződik, forditva pedig a játékos sebződik.</p>`;
      txt += `<button class="torles">Discard</button>`;
      txt += `</div>`;
      FT.html(txt);

      ($(".torles").on("click", ()=>{
        let txt = ``;
        FT.html(txt);
      }));

      ($(".button_f").on("click", ()=>{
        let txt = ``;
        FT.html(txt);
      }));

    }

  }
  
  export default About; 