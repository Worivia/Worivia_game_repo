class Credit {
    constructor() {
      const FT = $(".feltolt");
      let txt = `<div class="accont">`;
      txt += `<h2>Credits:</h2>`;
      txt += `Facebook:`;
      txt += `<a href>https://www.facebook.com/janos.senki.7</a>`;
      txt += `<a href>https://www.facebook.com/profile.php?id=100081024306998</a>`;
      txt += `Github:`;
      txt += `<a href>https://github.com/szlankapeter</a>`;
      txt += `<a href>https://github.com/Venc03</a>`;
      txt +=`<br>`;
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
  
  export default Credit; 