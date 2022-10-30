import Sprite from "./_Sprite.mjs";
export default class Player {
  constructor(canva, startPoint, endPoint) {
    this.canva = canva;
    this.active = 0;
    this.timeA = 0;
    this.startPosYX = startPoint;
    this.endPosYX = endPoint;
    this.pos = [0, 0];
    this.indexG = 0;
    this.gfxd0 = [
      [0, 1, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 1, 1, 0, 1, 0],
      [0, 0, 1, 2, 2, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 0, 0, 0, 0]];
    this.gfxd1 = [
      [1, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 1, 1, 0, 1, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0]];
    this.sprites = [[...this.gfxd0], [...this.gfxd1]]
  }
  init(type, speed, flag) {
    this.flag = flag;
    this.speed = speed;
    this.type = type
    this.sprite = new Sprite(this.sprites, this.canva)
    this.sprite.init(this.startPosYX, this.endPosYX, this.type, this.speed);
    this.circle = this.circleTiles()
  }
  circleTiles() {
    let path = k => 2 * Math.PI * k / (12);
    let xVal = [];
    let yVal = [];
    let circleTilesArr = [];
    let gf
    let ff
    let sprite = this.sprite.sprite[0]
    if (this.active) {
      gf = (sprite[0].pos[0])
      ff = (sprite[0].pos[1])
    } else {
      gf = (sprite[1].pos[0])
      ff = (sprite[1].pos[1])
    }
      for (let k = 1; k <= 16; k++) {
        xVal[k] = (gf + 2 * Math.cos(path(k))).toFixed(0)
        yVal[k] = (ff + 2 * Math.sin(path(k))).toFixed(0)
        if (this.canva.raws[xVal[k]] && this.canva.raws[xVal[k]][yVal[k]]) {
          circleTilesArr.push(this.canva.raws[xVal[k]][yVal[k]])
        }
      }
    return circleTilesArr
  }
  render() {
    if (this.flag) {
      this.circle = this.circleTiles()
      if (this.circle && this.circle[Math.trunc(this.indexG)]) {
        for (let dot of this.circle) {
          dot.className = 'active__banner';
        }
        this.circle[Math.trunc(this.indexG)].className = 'active__enemy';
        this.indexG = this.indexG + (64 / 1000)
        if (this.indexG > this.circle.length - 1) {
          this.indexG = 0
        }
      }
    }
    if (new Date().getSeconds() <= this.timeA) {
      this.sprite.render(this.active)
    }
    if (new Date().getSeconds() != this.timeA) {
      this.active == 0 ? this.active = 1 : this.active = 0;
      this.timeA = new Date().getSeconds()
    }
  }
}
