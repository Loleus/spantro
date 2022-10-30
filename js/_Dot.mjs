export default class Dot {
  constructor(acc) {
    this.pos = [0, 0];
    this.speed = [0, 0];
    this.startPos = []
    this.endPos = []
    this.distance = 0;
    this.acc = acc;
  };
  setEndPos(x, y) {
    this.moveTo(x, y)
  }
  setStartPos(x, y) {
    this.startPos = [x, y]
  }
  getNewPos(value, speed) {
    let rounded = Math.round((value + speed) * 1e12);
    let roundedDiv = rounded / 1e12
    return roundedDiv
  };
  update() {
    this.pos = [Math.trunc(this.counter[0]),Math.trunc(this.counter[1])];
    let newXc = this.getNewPos(this.counter[0], this.speed[0])
    let newYc = this.getNewPos(this.counter[1], this.speed[1])
    if ( this.pos[0] == this.eX || this.pos[1] == this.eY) {
      this.counter = [this.startPos[0], this.startPos[1]];
    } else {
      this.counter = [newXc,newYc];
    };
  };
  render() {
    if (!this.counter) {
      this.counter = [this.startPos[0], this.startPos[1]]
    }
    this.update();
  }
  moveTo(x, y) {
    let a = x - this.startPos[0];
    let b = y - this.startPos[1];
    this.eX = x;
    this.eY = y;
    let c = Math.sqrt(a*a + b*b);
    !isNaN(c) ? this.distance = c : null;
    let X = a / c;
    let Y = b / c;
    this.speed = [X * this.acc, Y * this.acc];
  }
};
