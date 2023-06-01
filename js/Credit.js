class Credit {
    constructor() {
      const ART = $("article");
      let txt = `<div class="cont">`;
      txt += `<h2>About the game:</h2>`;
      txt += `Facebook:`;
      txt += `<a href>https://www.facebook.com/janos.senki.7</a>`;
      txt += `<a href>https://www.facebook.com/profile.php?id=100081024306998</a>`;
      txt += `Github:`;
      txt += `<a href>https://github.com/szlankapeter</a>`;
      txt += `<a href>https://github.com/Venc03</a>`;
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
      index += `<div class="button_f"><button>Fight</button></div>`;
      index += `<div class="button_a"><button>About</button></div>`;
      index += `<div class="button_c"><button>Credits</button></div>`;
      index += `</div>`;
      szuloElem.html(index);
    }
  }
  
  export default Credit; 