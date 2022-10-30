  // rotate(cx, cy, x, y, angle) {
  //   var radians = (Math.PI / 180) * angle,
  //     cos = Math.cos(radians),
  //     sin = Math.sin(radians),
  //     nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
  //     ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
  //   return [nx, ny];
  // }
  // getSat() {
  //   let path = k => 2 * Math.PI * k / (24);
  //   let xVal = [];
  //   let yVal = [];
  //   let r = 4;
  //   let circleTilesArr = [];

  //   for (let k = 1; k <= 24; k++) {
  //     xVal[k] = Math.round(this.getX() + r * Math.sin(path(k)))
  //     yVal[k] = Math.round(this.getY() + r * Math.cos(path(k)))
  //     if (this.canva.raws[xVal[k]] && this.canva.raws[xVal[k]][yVal[k]]) {
  //       circleTilesArr.push(this.canva.raws[xVal[k]][yVal[k]])

  //     }
  //     this.circleBtns = circleTilesArr
  //   }
  // }
  // getCircleTiles() {
  //   let path = k => 2 * Math.PI * k / (12);
  //   let xVal = [];
  //   let yVal = [];
  //   let r = 8;
  //   let circleTilesArr = [];

  //   for (let k = 1; k <= 12; k++) {
  //     xVal[k] = Math.round(this.getX() + r * Math.sin(path(k)))
  //     yVal[k] = Math.round(this.getY() + r * Math.cos(path(k)))
  //     if (this.canva.raws[xVal[k]] && this.canva.raws[xVal[k]][yVal[k]]) {
  //       circleTilesArr.push(this.canva.raws[xVal[k]][yVal[k]])

  //     }
  //     this.circleBtns = circleTilesArr
  //   }
  // }
  // initShields() {
  //   this.rectTiles();
  //   // this.getSat();
  // }
  // rectTiles() {
  //   let { sin, cos } = Math
  //   let hC = Number((this.echoWidth / 2) * (sin(45) + cos(45)).toFixed(0))
  //   let hS = Number((this.echoWidth / 2) * (sin(45) - cos(45)).toFixed(0))

  //   let echoArray = [[this.getX() - hS, this.getY() - hC], [this.getX() - hC, this.getY() + hS], [this.getX() + hS, this.getY() + hC], [this.getX() + hC, this.getY() - hS]];
  //   let btns = [];
  //   for (let elem of echoArray) {
  //     if (this.canva.raws[elem[0]] && this.canva.raws[elem[0]][elem[1]]) {
  //       btns.push(this.canva.raws[elem[0]][elem[1]]);
  //     }
  //   }
  //   this.echoBtns = btns;
  // }