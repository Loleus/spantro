import Dot from "./_Dot.mjs";
export default class Sprite {
  constructor(sprites, canva) {
    this.canva = canva;
    this.spriteArr = sprites;
    this.sprite = [];
  }
  init(aXY, eXY, type, acc) {
    this.type = type;
    for (let i = 0; i < 8; i++) {
      this.sprite.push([])
      for (let k = 0; k < 8; k++) {
        let dot = new Dot(acc)
        dot.setStartPos(i + aXY[0], k + aXY[1])
        dot.setEndPos(i + eXY[0], k + eXY[1])
        this.sprite[i].push(dot)
      }
    }
  }
  setArr(activeSprite) {
    for (let i = 0; i < 8; i++) {
      for (let k = 0; k < 8; k++) {
        let s = this.sprite[i][k]
        s.cssClass = !activeSprite[i][k] ? `none` : activeSprite[i][k] == 2 ? `active`:`active__${this.type}`;
      }
    }
    return this.sprite
  }
  render(active) {
    let s = this.canva.size
    let update = this.setArr(this.spriteArr[active])
    for (let line of update) {
      for (let a of line) {
        a.render();
        if (a.pos[0] < s && a.pos[1] < s && a.pos[0] >= 0 && a.pos[1] >= 0) {
          if(a.cssClass == `active` || a.cssClass == `active__${this.type}`) {
            this.canva.raws[a.pos[0]][a.pos[1]].className = `${a.cssClass}`
          }
        }
      }
    }
  }
}
