import Player from './_Player.mjs';
import Banner from './_Banner.mjs';
import Canva from './_Canva.mjs';
export default class Game {
  constructor() {
    this.FPS = 1000 /30;
    this.canva = new Canva();
    this.player1 = new Player(this.canva, [-10, -0], [32, 30]);
    this.player2 = new Player(this.canva, [20, -20], [0, 40]);
    this.player3 = new Player(this.canva, [-20, 30], [40, -10]);
    this.player4 = new Player(this.canva, [40, 20], [-10, 10]);
    this.banner = new Banner(this.canva);
    this.timeA = new Date();
    this.deltaTime;
    this.timeoutId;
  }
  cancel() {
    clearTimeout(this.timeoutId)
  }
  clear() {
    let multi = 32*32;
    for (let i = 0; i <multi;i++) {
      let accSpan = this.spans[i]
      accSpan.className = "inActive";
    }
    let multi2 = 32*44;
    for (let i = multi; i <multi2;i++) {
      let accSpan = this.spans[i]
      accSpan.className = "active__enemy";
    }
  }
  show() {
    this.banner.render();
    this.player1.render();
    this.player2.render();
    this.player3.render();
    this.player4.render();
  }
  loop() {
    this.clear();
    this.show();
    this.deltaTime = new Date() - this.timeA;
    this.mainLoop();
  }
  mainLoop() {
    this.timeoutId = setTimeout(this.loop.bind(this), this.FPS - this.deltaTime)
  }

  init() {
    this.canva.initBoard();
    this.spans = document.querySelectorAll("span");
    this.player1.init("enemy", 0.16, true);
    this.player2.init("player", 0.12, false);
    this.player3.init("neutral", 0.25, true);
    this.player4.init("bonus", 0.12, false);
    this.banner.init("banner", 0.2);
    this.mainLoop();
  };
};
